import React, { useContext, useEffect } from 'react';
import './SkillCard.scss';
import axios from 'axios';
import { PlaylistContext } from '../../context/PlaylistContext';

export default function SkillCard({skill}) {

    const { handleAddedPlaylist } = useContext(PlaylistContext);
    console.log(skill);

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${skill.playlistId}&maxResults=50&key=${process.env.REACT_APP_API_KEY}`,{ transformRequest: (data, headers) => {
            delete headers.common['Authorization'];
        }})
        .then(res=>{
            console.log("this is the response from a playlislist call", res.data)
            let newSkill = {
                ...skill,
                nextPageToken: res.data.nextPageToken || null,
                totalVideos: res.data.pageInfo.totalResults,
                currentVideo: 0,
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
            <img src={skill.thumbnailUrl} alt="" className="skill__image"/>
            <div className="skill__sub skill__sub--first">
                <p className="skill__title">{skill.title} by {skill.channelTitle}</p>
                <p>{skill.description}</p>
            </div>
            <div className="skill__sub">
                <p className="skill__title">{skill.skillName}</p>
                <p>{skill.skillDescription}</p>
            </div>
        </div>
    )
}
