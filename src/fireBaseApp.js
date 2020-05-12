import React from "react";
import { Router } from "@reach/router";
import SignIn from "./signIn";
import SignUp from "./signUp";
import PasswordReset from "./passwordReset";
function Application() {
    const user = null;
    return (
        user ?
            <profilePage />
            :
            <Router>
                <SignUp path="signUp" />
                <SignIn path="/" />
                <PasswordReset path = "passwordReset" />
            </Router>

    );
}
export default Application;