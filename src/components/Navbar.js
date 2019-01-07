import React from 'react'
import { connect } from 'react-redux'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'

import { Link } from 'react-router-dom'
import { auth_logout } from '../store/auth'

class AppNavbar extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false,
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/" className="text-uppercase">
                        <span role="img">🚀</span> Quizer
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.props.auth.isAuthenticated ? (
                                <React.Fragment>
                                    <NavItem>
                                        <NavLink tag={Link} to="/create">
                                            New Quiz
                                        </NavLink>
                                    </NavItem>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Rayhan
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>Profile</DropdownItem>
                                            <DropdownItem>
                                                Settings
                                            </DropdownItem>
                                            {/* <DropdownItem divider /> */}
                                            <DropdownItem
                                                onClick={() =>
                                                    this.props.auth_logout()
                                                }
                                            >
                                                Logout
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <NavItem>
                                        <NavLink tag={Link} to="/login">
                                            Login
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to="/register">
                                            Signup
                                        </NavLink>
                                    </NavItem>
                                </React.Fragment>
                            )}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default connect(
    ({ auth }) => ({ auth }),
    { auth_logout }
)(AppNavbar)
