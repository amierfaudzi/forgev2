import React, { useContext, useEffect } from 'react';
import './SkillCard.scss';
import axios from 'axios';
import { PlaylistContext } from '../../context/PlaylistContext';

export default function SkillCard({skill}) {

    const { handleAddedPlaylist, addedPlaylist} = useContext(PlaylistContext)

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&maxResults=50&key=${process.env.REACT_APP_API_KEY}`,{ transformRequest: (data, headers) => {
            delete headers.common['Authorization'];
        }})
        .then(res=>{
            console.log("this is the response from a playlislist call",res.data)
            let newSkill = {
                ...skill,
                nextPageToken: res.data.nextPageToken,
                totalVideos: res.data.pageInfo.totalResults,
                video: []
            }
            res.data.items.map(data=> {
                let video = {};
                video.videoId = data.snippet.resourceId.videoId;
                video.position = data.snippet.position;
                video.title = data.snippet.title;
                video.playlistId = data.snippet.playlistId;
                video.thumbnail = data.snippet.thumbnails.medium.url;
                video.notes = []
                newSkill.video.push(video)
            });
            handleAddedPlaylist(newSkill);
        })
        .catch(err=>console.log(err));
    
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
//page token etx