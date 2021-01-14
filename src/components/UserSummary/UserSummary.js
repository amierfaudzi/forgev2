import React, { useEffect, useState } from 'react';
import './UserSummary.scss';
import axios from 'axios';
import User from '../User/User';

export default function UserSummary() {

    let [userData, setUserData] = useState('');

    useEffect(() => {
        axios.get('/user')
        .then(res => {
            setUserData(userData=res.data.credentials)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="userSummary">
            <User user={userData}/>

            {userData ?            
            <div className="titles-container">
                <div className="user-titles">
                    <h2>Accolades</h2>
                </div>
                <div>
                    <h3 className="accomplishment">Novice Giver</h3>
                    <h3 className="accomplishment">Novice Scribe</h3>
                    <h3 className="accomplishment">Master Scholar</h3>
                </div>
            </div> : <h2>Fetching Data</h2>}
        </div>
        
    )
}

// user name title level