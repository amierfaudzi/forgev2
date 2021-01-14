import React, { useEffect, useContext, useState } from 'react';
import User from '../../User/User';
import './Home.scss';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserContext';
import { ProfileContext } from '../../../contexts/ProfileContext';
import { ReactComponent as Note } from '../../../assets/icons/icons8-note.svg';
import { ReactComponent as Plan } from '../../../assets/icons/sketch.svg';
import { ReactComponent as Video } from '../../../assets/icons/icons8-video.svg';
import { ReactComponent as Loading } from '../../../assets/icons/Eclipse-1s-200px.svg';
import { ReactComponent as Join } from '../../../assets/icons/next.svg';
import { ReactComponent as Right } from '../../../assets/icons/icons8-right.svg';
import { ReactComponent as LevelUp } from '../../../assets/icons/level-up.svg';
import { ReactComponent as And } from '../../../assets/icons/icons8-and.svg';
import jwtDecode from 'jwt-decode';
import TextSpinner from '../../TextSpinner/TextSpinner';
import UserHome from '../../UserHome/UserHome';

export default function Home() {

  const token = localStorage.FBIdToken;
  
  const { user } = useContext(ProfileContext);

    return (

        <div className="main">
          {
          user.name ? <UserHome /> 
          : 
          <TextSpinner/>
          }
          
        </div>
    )
}
