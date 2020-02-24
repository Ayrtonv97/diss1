import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
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
        collapseID: '',
        memes: 'swagging'

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
                        color='light-blue lighten-4'
                        style={{ marginTop: '20px' }}
                        light
                    >
                        <MDBContainer>
                            <MDBNavbarBrand>{this.state.memes}</MDBNavbarBrand>
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
                                        <MDBNavLink to='#!'>{this.state.memes}</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to='#!'>{this.state.memes}</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to='#!'>{this.state.memes}</MDBNavLink>
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

class HamburgerMenuPage2 extends HamburgerMenuPage {

    render() {
        return super.render();
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
            <MDBBtn color="primary" className="float-right">signIn/login</MDBBtn>
        </Fragment>
    );
};

const Activity= () => {
    return (
        <select className="4">
            <option>Choose activity</option>
            <option value="1"> Running</option>
            <option value="2"> Walking</option>
            <option value="3"> Cycling</option>
        </select>
    );
};

ReactDOM.render(<div> < HamburgerMenuPage/> < HamburgerMenuPage2/>  < GridExamplesPage/> < ButtonPage/> <Activity/> </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

