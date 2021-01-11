import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './User.scss';

export default function User() {
    const { user } = useContext(UserContext);

    console.log(user);
    return (
        <>
        {user ?
        <section className="user">
            <div className="user__profile">
                <img src={user.imageUrl} alt="user-profile" className="user__image"/>
            </div>

            <div className="user__info">
                <p>Name: {user.name}</p>
                <p>Level: {user.level}</p>
            </div>
        </section>: ""}
        </>
    )
}
