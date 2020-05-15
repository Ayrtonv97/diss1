import React, {useState} from "react";
import { Link } from "@reach/router";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler =
        (event,email, password) => {
            event.preventDefault();
        };
    const style = {
        background: 'linear-gradient(45deg, #512da8 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        fontSize: 18,
        padding: '0 5px',
        marginLeft: '20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
            setPassword(value);
        }
    };

    return (
        <div className="mt-8">
            <h1 className="">Sign In</h1>
            <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
                {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
                <form className="">
                    <label htmlFor="userEmail" className="block">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="my-1 p-1 w-full"
                        name="userEmail"
                        value = {email}
                        placeholder="E.g: faruq123@gmail.com"
                        id="userEmail"
                        onChange = {(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userPassword" className="block">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="mt-1 mb-3 p-1 w-full"
                        name="userPassword"
                        value = {password}
                        placeholder="Your Password"
                        id="userPassword"
                        onChange = {(event) => onChangeHandler(event)}
                    />
                    <br/>
                    <button style={style} onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
                        Sign in
                    </button>
                </form>
                <br/>
                <button
                    className="bg-red-500 hover:bg-red-600 w-full py-2 text-white">
                    Sign in with Google
                </button>
                <p className="text-center my-3">
                    Don't have an account?{" "}
                    <Link to="signUp" className="text-blue-500 hover:text-blue-600">
                        Sign up here
                    </Link>{" "}
                    <br />{" "}
                    <Link to = "passwordReset" className="text-blue-500 hover:text-blue-600">
                        Forgot Password?
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default SignIn;