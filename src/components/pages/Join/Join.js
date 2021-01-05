import React from 'react';
import { useHistory } from 'react-router-dom';
import './Join.scss';
import axios from 'axios';

export default function Join() {

    let history = useHistory();

    const handleSignIn = (event) => {
        event.preventDefault();

        const userData = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        axios.post('/signin', userData)
        .then((res) => {
            setAuthorizationHeader(res.data.token);
            //set the name here
            console.log(res.data)
            history.push('/');
        })
        .catch((err) => {
            console.log(err)
        });
    }
    
    const handleSignUp = (event) => {
        event.preventDefault();

        const userData = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            confirmPassword: event.target.confirmPassword.value
        }

        axios.post('/signup', userData)
        .then((res)=>{
            setAuthorizationHeader(res.data.token);
            history.push('/');
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className="join">
            <form onSubmit={handleSignIn} className="join-form join-form--first">
                <h2>Already one of us? Sign in using your email and password</h2>
                <div>
                    <div className="join-form__field">
                        <label htmlFor="email" className="join-form__label">Email</label>
                        <input type="text" name="email" id="email" placeholder="email" className="join-form__text"/>
                    </div>
                    <div className="join-form__field">
                        <label htmlFor="password" className="join-form__label">Password</label>
                        <input type="password" name="password" id="" placeholder="password" className="join-form__text"/>
                    </div>
                </div>
                <button type="submit" className="join-form__button">Sign in</button>
            </form>
            <form onSubmit={handleSignUp} className="join-form">
                <h2>Interested to start forging? Sign up now to be one of us</h2>
                <div>
                    <div className="join-form__field">
                        <label htmlFor="name" className="join-form__label">Name</label>
                        <input type="text" name="name" placeholder="Name" className="join-form__text"/>
                    </div>
                    <div className="join-form__field">
                        <label htmlFor="email" className="join-form__label">Email</label>
                        <input type="text" name="email" id="" placeholder="user@email.com" className="join-form__text"/>
                    </div>
                    <div className="join-form__field">
                        <label htmlFor="password" className="join-form__label">Password</label>
                        <input type="password" name="password" placeholder="password" className="join-form__text"/>
                    </div>
                    <div className="join-form__field">
                        <label htmlFor="confirmPassword" className="join-form__label">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="confirm password" className="join-form__text"/>
                    </div>
                </div>
                <button type="submit" className="join-form__button">Sign Up</button>
            </form>
        </div>
    )
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};