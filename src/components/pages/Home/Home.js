import React, { useContext } from 'react';
import './Home.scss';
import { ProfileContext } from '../../../contexts/ProfileContext';
import TextSpinner from '../../TextSpinner/TextSpinner';
import UserHome from '../../UserHome/UserHome';

export default function Home() {

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
