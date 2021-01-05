import React, { useEffect, useContext, useState } from 'react';
import User from '../../User/User';
import './Home.scss';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';
import { ReactComponent as Note } from '../../../assets/icons/icons8-note.svg';
import { ReactComponent as Plan } from '../../../assets/icons/sketch.svg';
import { ReactComponent as Video } from '../../../assets/icons/icons8-video.svg';
import { ReactComponent as Loading } from '../../../assets/icons/Eclipse-1s-200px.svg';
import { ReactComponent as Join } from '../../../assets/icons/next.svg';
import { ReactComponent as Right } from '../../../assets/icons/icons8-right.svg';
import { ReactComponent as LevelUp } from '../../../assets/icons/level-up.svg';
import { ReactComponent as And } from '../../../assets/icons/icons8-and.svg';
import jwtDecode from 'jwt-decode';

export default function Home() {

  const token = localStorage.FBIdToken;
  
  const { user, handleAuth, handleSkill } = useContext(UserContext);
  
    const handleJoin = () => {
      window.location.href = '/join' 
    }

    useEffect(()=>{
      console.log("This component has rerendered")
      if(token){
        const decodedToken = jwtDecode(token);
        if(decodedToken.exp*1000 < Date.now()){
          window.location.href = '/join';
        } else {
          axios.defaults.headers.common['Authorization'] = token;
          axios.get('/user').then(res=>{
            console.log(res.data);
            handleAuth(res.data.credentials);
          })
          .catch(err=>console.log(err)); 
        }
      }
    }, [])

    return (

        <div className="main">

          <h1>This is the home</h1>
          {/* {(userLoading) ?
          <div className="loading">
            Fetching Profile...
            <Loading/>
          </div>
          : (token) ? 
          <div className="home-user">
            <User />
          </div>
           : 
          <div className="welcome">
          <div className="welcome__row welcome__row--first">
            
            <h1> Welcome to <span className="highlight">the forge</span>. We are helping young professional grow by gamifying the learning experience.</h1>
          </div>
          <div className="welcome__row welcome__row--middle">
            <div>
              <h2>HOW IT WORKS</h2>
            </div>
            <div className="guide-tray">
              <div className="icon-wrapper">
                <Plan className="icon-home"/>
                <h3>Plan</h3>
              </div>
              
              <Right className="icon-home--sub"/>

              <div className="guide-tray__sub">
                <div className="icon-wrapper">
                  <Video className="icon-home"/>
                  <h3>Watch</h3>
                </div>
                <And className="icon-home--sub"/>
                <div className="icon-wrapper">
                  <Note className="icon-home"/>
                  <h3>Take Notes</h3>
                </div>
              </div>

              <Right className="icon-home--sub"/>

              <div className="icon-wrapper">
                <LevelUp className="icon-home"/>
                <h3>Level up</h3>
              </div>
              
            </div>
          </div>
          <div className="welcome__row welcome__row--final">
            <button className="btn-fire" onClick={handleJoin}>Join Now <Join className="icon-join"/> </button>
          </div>
          </div> 
          } */}
        </div>
    )
}
