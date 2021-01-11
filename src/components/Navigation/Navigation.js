import React, { useContext, useEffect, useState } from 'react';
import './Navigation.scss';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as Forge } from '../../assets/icons/icons8-hammer-and-anvil.svg';
import { UserContext } from '../../contexts/UserContext';
import { ProfileContext } from '../../contexts/ProfileContext';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { SET_LOADING, SET_USER } from '../../reducers/types';

export default function Navigation() {

    const history = useHistory();
    const token = localStorage.FBIdToken;
    const { user, dispatch } = useContext(ProfileContext);

    const handleLogout = () => {
        localStorage.removeItem('FBIdToken');
        delete axios.defaults.headers.common['Authorization'];
        //handleAuth(null, true);
        history.push('/');
    }

    useEffect(()=>{
        if(token){
            const decodedToken =jwtDecode(token);
            if(decodedToken.exp*1000 < Date.now()){
                window.location.href = '/login';
            } else {
                dispatch({ type: SET_LOADING});
                axios.defaults.headers.common['Authorization'] = token;
                axios.get('/user')
                .then(res => {
                    dispatchEvent({ type: SET_USER, name: res.data.credentials.name})
                })
                .catch(err => console.log(err));
            }
        }
    }, [user.token])

    return (

        <nav className="nav">
            <div className="nav__wrapper">
                <div className="nav__sub">
                    <Link to='/' className="link">
                    <Forge className="logo"/>
                    <div className="nav__link">
                        Forge
                    </div>
                    </Link>          
                    <Link to='/kiln' className="link">
                        <div className="nav__link">
                            Armory
                        </div>
                    </Link >
                </div>
                
                {/* { user ?
                <div className="link nav__link" onClick={handleLogout}>
                Log Out
                </div> 
                : 
                <Link to='/join' className="link">
                    <div className="nav__link">
                    Join
                    </div>
                </Link>} */}

                <div>
                    <div className="link nav__link">Grand Keep</div>
                    <div className="link nav__link">Join</div>
                </div>
            </div>
        </nav>
    )
}
