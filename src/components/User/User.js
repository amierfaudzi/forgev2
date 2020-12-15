import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './User.scss';

export default function User() {
    const { user } = useContext(UserContext);

    console.log(user);
    return (
        <>
        {user ?
        <section className="user">
            <div className="user__profile">
                <img src={user.credentials.imageUrl} alt="user-profile" className="user__image"/>
            </div>

            <div className="user__info">
                <p>Name: {user.credentials.name}</p>
                <p>Level: {user.credentials.level}</p>
            </div>
        </section>: ""}
        </>
    )
}
