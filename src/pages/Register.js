import React from 'react'
import { connect } from 'react-redux'
import toastr from 'toastr'
import {
    Container,
    Row,
    Col,
    FormGroup,
    Input,
    Label,
    FormFeedback,
    Button,
} from 'reactstrap'

import Axios from 'axios'
import { loadingStart, loadingStop } from '../store/meta'
import { catchError, clearError } from '../store/errors'
class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {},
        success: false,
    }

    componentDidMount() {}

    static getDerivedStateFromProps(nextProps, prevState) {
        if (
            JSON.stringify(nextProps.errors) !==
            JSON.stringify(prevState.errors)
        )
            return { errors: nextProps.errors }
        return null
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const user = { ...this.state }

        delete user.errors
        this.props.loadingStart()
        this.props.clearError()
        Axios.post(
            'https://quiz-app-api-demo.herokuapp.com/api/user/register',
            user
        )
            .then(res => {
                toastr.success(res.data.message)
                this.setState({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                })
                this.props.clearError()
                this.props.loadingStop()
            })
            .catch(({ response: { data: errors } }) => {
                this.setState({ success: true })
                this.props.catchError(errors)
                this.props.loadingStop()
                console.log(errors)
            })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={6} className="mx-auto">
                        <div className="text-center">
                            <h3 className="py-3">Register</h3>
                        </div>

                        <form onSubmit={this.onSubmit}>
                            {Object.keys(this.state).map(key => {
                                if (key !== 'errors' && key !== 'success')
                                    return (
                                        <FormGroup key={key}>
                                            <Label for={key}>
                                                {key.charAt(0).toUpperCase() +
                                                    key.slice(1)}
                                            </Label>
                                            <Input
                                                invalid={
                                                    this.state.errors[key] !==
                                                    undefined
                                                }
                                                placeholder={
                                                    key === 'password'
                                                        ? 'Password'
                                                        : key ===
                                                          'confirmPassword'
                                                        ? 'Confirm Password'
                                                        : `Your ${key
                                                              .charAt(0)
                                                              .toUpperCase() +
                                                              key.slice(1)}`
                                                }
                                                name={key}
                                                id={key}
                                                type={
                                                    key === 'password' ||
                                                    key === 'confirmPassword'
                                                        ? 'password'
                                                        : key === 'email'
                                                        ? 'email'
                                                        : 'text'
                                                }
                                                disabled={
                                                    this.props.meta.loading
                                                }
                                                value={this.state[key]}
                                                onChange={this.onChange}
                                            />
                                            <FormFeedback>
                                                {this.state.errors[key]}
                                            </FormFeedback>
                                        </FormGroup>
                                    )
                                return null
                            })}
                            <Button
                                disabled={this.props.meta.loading}
                                color="primary"
                            >
                                Register
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    ...state,
})

export default connect(
    mapStateToProps,
    { loadingStart, loadingStop, catchError, clearError }
)(Register)
