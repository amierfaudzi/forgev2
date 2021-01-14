import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HexagonWebtiki from '../../HexagonWebtiki/HexagonWebtiki';
import './GrandKeep.scss';


export default function GrandKeep() {

    let [ publicSkill, setPublicSkill ] = useState('')
    const isGrandKeep = true;

    useEffect(() => {
        
        axios.get('/grandkeep').then(res => {
            console.log(res.data)
            setPublicSkill(publicSkill=res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleAddSkill = () => {
        console.log("Skill has been added to the list");
    }
    return (
        <div>
            <h1>"Imitation is the sincerest form of flattery"</h1>

            <HexagonWebtiki isGrandKeep={isGrandKeep} handleAddSkill={handleAddSkill} skill={publicSkill}/>
        </div>
    )
}
