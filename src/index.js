import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import './App.css'; //Import here your file styles


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

ReactDOM.render(<div> < GridExamplesPage/> < ButtonPage/> <Activity/> </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

