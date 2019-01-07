import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Button,
    Label,
    FormFeedback,
} from 'reactstrap'
import { auth_login } from '../store/auth'

const initState = {
    email: '',
    password: '',
}

class Login extends Component {
    state = initState

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        this.props.auth.isAuthenticated && this.props.history.push('/')
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.auth_login(this.state, this.props.history)
    }

    render() {
        return (
            <Container className="py-5">
                <Row>
                    <Col sm={6} className="mx-auto">
                        <h3 className="py-2">Login</h3>
                        <Form onSubmit={this.submitHandler}>
                            {Object.keys(this.state).map(key => (
                                <FormGroup key={key}>
                                    <Label for={key}>
                                        {key[0].toUpperCase() + key.slice(1)}
                                    </Label>
                                    <Input
                                        placeholder={
                                            key[0].toUpperCase() + key.slice(1)
                                        }
                                        id={key}
                                        name={key}
                                        type={key}
                                        onChange={this.onChange}
                                        invalid={
                                            this.props.errors[key] !== undefined
                                        }
                                        disabled={this.props.meta.loading}
                                    />
                                    <FormFeedback>
                                        {this.props.errors[key]}
                                    </FormFeedback>
                                </FormGroup>
                            ))}
                            <FormGroup>
                                <Button
                                    disabled={this.props.meta.loading}
                                    color="primary"
                                >
                                    Login
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(
    ({ errors, meta, auth }) => ({ errors, meta, auth }),
    { auth_login }
)(Login)
