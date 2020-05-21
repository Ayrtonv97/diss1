import React, {Component} from "react";
import {Link} from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
    MDBHamburgerToggler } from 'mdbreact';
import {FaCalculator} from "react-icons/all";

class NavigateBar extends Component {
    state = {
        collapse1: false,
        collapseID: ''
    }

    toggleSingleCollapse = collapseId => {
        this.setState({
            ...this.state,
            [collapseId]: !this.state[collapseId]
        });
    }

    render() {
        return (
                    <MDBNavbar>
                            <MDBNavbarBrand>
                                <FaCalculator/> Food Energy Equator
                            </MDBNavbarBrand>
                            <MDBHamburgerToggler color="#d3531a" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
                            <MDBCollapse isOpen={this.state.collapse1} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to="/">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/MyLog">My Log</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="SignIn">Sign In</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                    </MDBNavbar>
        );
    }
}


export default NavigateBar;