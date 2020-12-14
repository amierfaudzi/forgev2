import React, { useState, useEffect, useContext } from 'react';
import './Profile.scss';
import User from '../../User/User';
import firebase from "../../../firebase/firebase";
import db from '../../../firebase/db'
import { UserContext } from '../../../context/UserContext';

//removing extra htmls
function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
};

export default function Profile() {

    let { user, handleAuth } = useContext(UserContext)

    const handleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            let newUser = {
                name: res.user.displayName,
                id: res.user.uid,
                email: res.user.email,
                level: 0,
                created_at: firebase.firestore.FieldValue.serverTimestamp()
            }
            db.collection('users').doc(newUser.id).set(newUser);
            handleAuth(newUser);
            console.log(user);
        })
        .catch(err=> console.log(err));
    }

    const handleLogout = () => {
        firebase.auth().signOut()
        .then(res=>{
            handleAuth(null)
            // setIsLoggedIn(false);
            console.log(user);
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className="main">
            <h1>Find your profile</h1>
            {(user ? <User username={user.username} level={user.level} /> : "Please sign in or register")}
            <button onClick={handleLogin}>Login with Google</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
