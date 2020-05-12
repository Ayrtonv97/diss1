import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {
    MDBCollapse,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink
} from "mdbreact";

class NavigateBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return(
            <div>
                <Router>
                        <MDBNavbar color="bg-danger" dark expand="md">
                            <MDBNavbarBrand>
                                <strong>Food-Equator Calculator</strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={ this.onClick } />
                            <MDBCollapse isOpen = { this.state.collapse } navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to="#">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">My Log</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">Sign in/Login</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                    </MDBNavbar>
                </Router>
            </div>
        );
    }
}

export default NavigateBar;