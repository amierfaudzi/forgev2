import React, { useEffect, useState } from 'react';
import './SkillSummary.scss';
import axios from 'axios';

export default function SkillSummary() {

    let [skillData, setSkillData] = useState('')

    useEffect(() => {
        axios.get('/skills')
        .then(res => {
            setSkillData(skillData = res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="skillSummary">
            <div className="previously-watched">

            </div>
            <div className="other-skills">

            </div>
        </div>
    )
}
