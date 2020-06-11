import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './App.css'; //Import here your file styles
import App from './App'
import Icon from './Icon';
import glamorous from "glamorous";
import Tabs from "./Tabs";
import {padding} from "glamor/utils";
import Application from "./fireBaseApp";
import UserProvider from "./userProvider";

ReactDOM.render( <App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

