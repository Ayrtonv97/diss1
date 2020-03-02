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
import glamorous from "glamorous";
import Tabs from "./Tabs";


class HamburgerMenuPage extends Component {
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
                <header>
                    <MDBNavbar color="black" dark expand="md" >
                        <MDBNavbarBrand href="/">
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
                </header>
            </Router>
        </div>
        );
    }
}


const ChangeTabs = () => (
    <div style={styles}>
        <Tabs
            activeTab={{id: "tab1"}}>
            <Tabs.Tab id="tab1" title="Tab 1">
                <p> This is Tab 1</p>
                <select className= {styles.activity}>
                    <option>Choose activity</option>
                    <option value="1"> Running</option>
                    <option value="2"> Walking</option>
                    <option value="3"> Cycling</option>
                </select>
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="Tab 2">
                <div padding={20}>This is tab 2</div>
            </Tabs.Tab>
        </Tabs>
    </div>
);

const ButtonPage = () => {
    return (
        <Fragment>
            <MDBBtn color="primary">signIn/login</MDBBtn>
        </Fragment>
    );
};

const Food= () => {
    return(
        <select className={styles.Food}>
            <option>Choose Food</option>
            <option value="1">Apple</option>
            <option value="2"></option>
        </select>
    );
};

ReactDOM.render(<div> <HamburgerMenuPage/> < ButtonPage/> <ChangeTabs/> </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

