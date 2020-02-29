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
        const container = {height: 500}
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
    );
}
    function Tabs(){
        return(
            <div>
            <h1>Tabs Demo</h1>
            <Tabs>
            <div label="Gator">
            See ya later, <em>Alligator</em>!
    </div>
    <div label="Croc">
        After &apos;while, <em>Crocodile</em>!
    </div>
    <div label="Sarcosuchus">
        Nothing to see here, this tab is <em>extinct</em>!
        </div>
    </Tabs>
</div>
    );
}

class TabContent extends Component {
    render() {
        return (
            <div id="firstTab" className="tabcontent">
                <h3> Activity </h3>
                <p>Enter what activity you would like to do from the consumption of food you have consumed.</p>
            </div>
        );
    }
}

ReactDOM.render(<div> <HamburgerMenuPage/> <Tabs/> < ButtonPage/> <Activity/> <TabContent/> </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

