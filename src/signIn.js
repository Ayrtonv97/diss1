import React, { Component } from "react";

const signing = {
    color: 'black',
}

// for the tutorial in how to design the sign in page is found here: https://www.positronx.io/build-react-login-sign-up-ui-template-with-bootstrap-4/

export default class Login extends Component {
    render() {
        return (
            <form>
                <h2 style={signing}>Sign In</h2>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        );
    }
}