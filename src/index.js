import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation/navigateBar';
import * as serviceWorker from './serviceWorker';
import ChangeTabs from './changeTab';
import Tab1 from './Tab1';
import styles from './select.module.css';
import './App.css'; //Import here your file styles
import glamorous from "glamorous";
import Tabs from "./Tabs";
import {padding} from "glamor/utils";
import ActivityForm from "./activityForm";


ReactDOM.render(<div> <Navigation/> <Tab1/> </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

