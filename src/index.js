import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import styles from './select.module.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse } from "mdbreact";
import './App.css'; //Import here your file styles

import { BrowserRouter as Router } from 'react-router-dom';

class HamburgerMenuPage extends Component {
    state = {
        collapseID: ''

    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    };

    render() {
        return (
            <Router>
                <MDBContainer>
                    <MDBNavbar
                        style={{ marginTop: '5px' }}
                        light
                    >
                        <MDBContainer>
                            <MDBNavbarBrand>Food Equator</MDBNavbarBrand>
                            <MDBNavbarToggler
                                onClick={this.toggleCollapse('navbarCollapse1')}
                            />
                            <MDBCollapse
                                id='navbarCollapse1'
                                isOpen={this.state.collapseID}
                                navbar
                            >
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to='#!'>Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to='#!'>Activity</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to='#!'>Sign in/ Login</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </MDBContainer>
            </Router>
        );
    }
}

const GridExamplesPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="11">Food-Equator Calculator</MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};


const ButtonPage = () => {
    return (
        <Fragment>
            <MDBBtn color="primary">signIn/login</MDBBtn>
        </Fragment>
    );
};

const Activity= () => {
    return (
        <select className={styles.activity}>
            <option>Choose activity</option>
            <option value="1"> Running</option>
            <option value="2"> Walking</option>
            <option value="3"> Cycling</option>
        </select>
    );
};
const Food= () => {
    return(
        <select className={styles.Food}>
            <option>Choose Food</option>
            <option value="1">Apple</option>
            <option value="2"></option>
        </select>
    )
}

ReactDOM.render(<div> < HamburgerMenuPage/> < GridExamplesPage/> < ButtonPage/> <Activity/> </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

