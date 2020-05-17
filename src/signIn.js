import React, {useState} from "react";
import blue from "@material-ui/core/colors/blue";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const style = {
        background: 'blue',
        borderRadius: 3,
        border: 0,
        color: 'white',
        fontSize: 18,
        padding: '0 5px',
        marginLeft: '20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    };
    const sign = {
        border: '1px solid',

    }

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
        <div>
            <h1>Sign In</h1>
            <div style={sign}>
                <form className="">
                    <label>
                        Email:
                    </label>
                    <input
                        type="email"
                        name="userEmail"
                        value = {email}
                        placeholder="E.g: jmare@gmail.com"
                        id="userEmail"
                        onChange = {(event) => onChangeHandler(event)}
                    />
                    <label>
                        Password:
                    </label>
                    <input
                        type="password"
                        name="userPassword"
                        value = {password}
                        placeholder="Your Password"
                        id="userPassword"
                        onChange = {(event) => onChangeHandler(event)}
                    />
                    <br/>
                    <button style={style}>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};
export default SignIn;