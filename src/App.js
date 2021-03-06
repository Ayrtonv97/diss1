import React from 'react';
import './App.css';
import Navigation from "./Navigation/navigateBar";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from "./signIn";
import Tab1 from "./Tab1";
import MyLog from "./MyLog";
import help from "./help";

function App() {
        return (
            <Router>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={Tab1}/>
                        <Route path="/signIn" component={SignIn}/>
                        <Route path="/MyLog"  component={MyLog}/>
                        <Route path="/help" component={help}/>
                    </Switch>
                </div>
            </Router>
        );
}
// this is to route the signin, my log and help pages so that the user can interact with them.
export default App;