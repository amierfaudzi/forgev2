import React, { useEffect } from 'react';
import './UserHome.scss';
import SkillSummary from '../SkillSummary/SkillSummary';
import UserSummary from '../UserSummary/UserSummary';


export default function UserHome() {

    return (
        <div className="user-home">
            <div className="user-home__content">
                <UserSummary />
                <SkillSummary />
            </div>
        </div>
    )
}
