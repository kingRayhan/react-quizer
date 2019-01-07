import React from 'react'
import { connect } from 'react-redux'

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
import { auth_register } from '../store/auth'

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {},
    }

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

    clearState = () => {
        this.setState({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    }

    onSubmit = e => {
        e.preventDefault()
        const user = { ...this.state }
        delete user.errors
        this.props.auth_register(user, this.clearState)
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
    { auth_register }
)(Register)
