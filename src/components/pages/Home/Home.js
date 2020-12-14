import React, { useEffect, useContext } from 'react';
import User from '../../User/User';
import './Home.scss';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';
import { ReactComponent as Youtube } from '../../../assets/icons/icons8-youtube-squared.svg';
import { ReactComponent as Map } from '../../../assets/icons/icons8-waypoint-map.svg';
import { ReactComponent as Loading } from '../../../assets/icons/Eclipse-1s-200px.svg';

export default function Home() {

    const token = localStorage.FBIdToken;
    let { user, handleAuth } = useContext(UserContext);

    useEffect(()=>{
      if(token){
        axios.defaults.headers.common['Authorization'] = token;
        axios.get('/user').then(res=>{
          console.log(res);
          handleAuth(user = res.data)
        })
        .catch(err=>console.log(err))
      }
    }, [])

    const handleJoin = () => {
      
    }

    return (
        <div className="main">
          
          {user ? <User/>: 
          <div className="welcome">
            <div className="welcome__row">
              <Map/>
              <h2>We aspire to make learning more fun</h2>
            </div>
            <div className="welcome__row welcome__row--middle">
              Search through the vast ocean of knowledge that is Youtube
              <Youtube />
            </div>
            <div className="welcome__row welcome__row--final">
              <button className="btn-fire" onClick={handleJoin}>Join Now</button>
            </div>
            
          </div>
          }
            
        </div>
    )
}
