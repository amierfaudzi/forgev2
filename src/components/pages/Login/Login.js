import React, { useContext, useState } from 'react';
import './Login.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { SET_TOKEN } from '../../../reducers/types';
import { ProfileContext } from '../../../contexts/ProfileContext';

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};

export default function Login() {

    const { dispatch } = useContext(ProfileContext);
    const [ mode, setMode ] = useState('');
    let history = useHistory();

    const handleMode = () => {
        if(!mode){
            setMode("sign-up-mode");
        } else {
            setMode("");
        }
    }

    const handleSignIn = (event) =>{
        event.preventDefault();
        const userData = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        axios.post('/signin', userData)
        .then((res) => {
            setAuthorizationHeader(res.data.token);
            dispatch({ type: SET_TOKEN, token: res.data.token});
            history.push('/');
        })
        .catch((err) => {
            console.log(err)
        });
    }

    const handleSignUp = (event) =>{
        event.preventDefault();
        const userData = {
            email: event.target.email.value,
            password: event.target.password.value,
            name: event.target.name.value,
            confirmPassword: event.target.confirmPassword.value
        };

        axios.post('/signup', userData)
        .then((res) => {
            setAuthorizationHeader(res.data.token);
            dispatch({ type: SET_TOKEN, token: res.data.token});
            history.push('/');
        })
        .catch((err) => {
            console.log(err)
        });
    }

    return (
        <div className={`container ${mode}`}>
        <div className="forms-container" onSubmit={handleSignIn}>
            <div className="signin-signup">
                {/* Sign in */}
                <form className="sign-in-form">
                    <h2 className="title">Sign In</h2>
                    <div className="input-field">
                        <i></i>
                        <input type="text" name="email" id="" placeholder="email"/>
                    </div>
                    <div className="input-field">
                        <i></i>
                        <input type="password" name="password" id="" placeholder="password"/>
                    </div>
                    <button className="btn" type="submit">Login</button>
                </form>
                {/* Sign up */}
                <form className="sign-up-form" onSubmit={handleSignUp}>
                    <h2>Sign Up</h2>
                    <div className="input-field">
                        <i></i>
                        <input type="text" name="name" id="" placeholder="name"/>
                    </div>
                    <div className="input-field">
                        <i></i>
                        <input type="email" name="email" id="" placeholder="email"/>
                    </div>
                    <div className="input-field">
                        <i></i>
                        <input type="password" name="password" id="" placeholder="password"/>
                    </div>
                    <div className="input-field">
                        <i></i>
                        <input type="password" name="confirmPassword" id="" placeholder="confirm password"/>
                    </div>
                    <button className="btn" type="submit">Login</button>
                </form>
            </div>
        </div>
        {/* panels */}
        <div className="panels-container">
            {/* left panel */}
            <div className="panel left-panel">
                <div className="login-content">
                    <h3>New here?</h3>
                    <p>Sign up now to start forging your own path.</p>
                    <button className="btn transparent" onClick={handleMode}>Sign up</button>
                    {/* <img src="http://placekitten.com/200/200" alt="" className="login-image"/> */}
                </div>
            </div>
            {/* right panel */}
            <div className="panel right-panel">
                <div className="login-content">
                    <h3>One of us?</h3>
                    <p>You know how it is then. Jump on back and keep on forging!</p>
                    <button className="btn transparent" onClick={handleMode}>Sign In</button>
                    {/* <img src="http://placekitten.com/200/200" alt="" className="login-image"/> */}
                </div>
            </div>
        </div>
    </div>
    )
}
