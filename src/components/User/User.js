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
            <img src={user.credentials.imageUrl} alt="user-profile" className="user__image"/>
            <p>{user.credentials.name}</p>
            <p>{user.credentials.level}</p>
        </section>: ""}
        </>
    )
}
