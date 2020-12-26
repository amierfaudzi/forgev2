import React, { useContext, useEffect, useState } from 'react';
import './Navigation.scss';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as Forge } from '../../assets/icons/icons8-hammer-and-anvil.svg';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default function Navigation() {

    const history = useHistory();
    const token = localStorage.FBIdToken;
    const { user, handleAuth, handleSkill } = useContext(UserContext);

    const handleLogout = () => {
        localStorage.removeItem('FBIdToken');
        delete axios.defaults.headers.common['Authorization'];
        handleAuth(null, true);
        history.push('/');
    }

    useEffect(()=>{
        if(token){
          const decodedToken = jwtDecode(token);
          if(decodedToken.exp*1000 < Date.now()){
            window.location.href = '/join';
          } else {
            axios.defaults.headers.common['Authorization'] = token;
            axios.get('/user').then(res=>{
              console.log(res.data);
              handleAuth(res.data.credentials);
              handleSkill(res.data.skills);
            })
            .catch(err=>console.log(err)); 
          }
        }
      }, [])

    return (

        <nav className="nav">
            <div className="nav__wrapper">
                <div className="nav__sub">
                    <Link to='/' className="link">
                    <Forge className="logo"/>
                    <div className="nav__link">
                        {(user ? `${user.name}'s` : "")}  Forge
                    </div>
                    </Link>
                    { user ?             
                    <Link to='/kiln' className="link">
                    <div className="nav__link">
                        Kiln
                    </div>
                    </Link >: ""}
                </div>
                
                { user ?
                <div className="link nav__link" onClick={handleLogout}>
                Log Out
                </div> 
                : 
                <Link to='/join' className="link">
                    <div className="nav__link">
                    Join
                    </div>
                </Link>}
            </div>
        </nav>
    )
}
