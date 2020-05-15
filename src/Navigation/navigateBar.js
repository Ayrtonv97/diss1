import React, {Component} from "react";
import {Link} from "react-router-dom";
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
                        <MDBNavbar color="light-blue lighten-4" dark expand="md">
                            <MDBNavbarBrand>
                                <strong>Food-Equator Calculator</strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={ this.onClick } />
                            <MDBCollapse isOpen = { this.state.collapse } navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to="/">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">My Log</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/SignIn">Sign in</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                    </MDBNavbar>
            </div>
        );
    }
}

export default NavigateBar;