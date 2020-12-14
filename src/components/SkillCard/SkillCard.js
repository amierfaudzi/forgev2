import React, { useContext, useEffect } from 'react';
import './SkillCard.scss';
import axios from 'axios';
import { PlaylistContext } from '../../context/PlaylistContext';

export default function SkillCard({skill}) {

    console.log(skill)

    const { addedPlaylist, handleAddedPlaylist} = useContext(PlaylistContext)

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&maxResults=50&key=${process.env.REACT_APP_API_KEY}`)
        .then(res=>{
            console.log(res.data)
            handleAddedPlaylist(res.data)
        })
        .catch(err=>console.log(err))
    }, [])

    return (
        <div className="skill">
            <div>
                <p>{skill.skillName}</p>
                <p>{skill.skillDescription}</p>
            </div>
            <div>
                <img src={skill.thumbnailUrl} alt=""/>
                <div>
                    <p>{skill.title} by {skill.channelTitle}</p>
                    <p>{skill.description}</p>
                </div>
            </div>
        </div>
    )
}


//make the call to the ytPlaylist here and send all the video info
//when a user click on generate skill add it to the db
//build the skill here and send it to the global context
//then send it when generating skill
//add mmroe info to skill
//page token etxx