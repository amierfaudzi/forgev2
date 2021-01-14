import React, { useContext, useEffect, useState } from 'react';
import './SkillCard.scss';
import axios from 'axios';
import { PlaylistContext } from '../../contexts/PlaylistContext';

export default function SkillCard({skill, setSkill}) {

    const { handleAddedPlaylist } = useContext(PlaylistContext);
    
    let [ finalSkill, setFinalSkill] = useState();
    let [isPublic, setIsPublic] = useState(false);

    console.log("This is the final skill at render", finalSkill)

    const handlePublic = () => {
        finalSkill.isPublic= !finalSkill.isPublic;
        setIsPublic(!isPublic);
        setSkill(skill=finalSkill);
        console.log("This is the final skill and the skill", finalSkill, skill)
    }

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
                isPublic: false,
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
            setFinalSkill(finalSkill=newSkill);
            setSkill(skill=finalSkill);
        })
        .catch(err=>console.log(err));
    
    }, [])

    return (
        <div className="skill">
            <div className="image__wrapper">
                <img src={skill.thumbnailUrl} alt="" className="skill__image"/>
            </div>

            <div className="skill__publicity">
                <label className="switch">
                    <input type="checkbox" onChange={handlePublic}/>
                    <span className="slider round"></span>
                </label>

                {(isPublic ? "Public" : "Private")}
            </div>

            <div className="skill__sub">
                <p className="skill__title">{skill.skillName}</p>
                <p>{skill.skillDescription}</p>
            </div>

            <div className="skill__sub skill__sub--first">
                <p className="skill__title">{skill.title} by {skill.channelTitle}</p>
                <p>{skill.description}</p>
            </div>
        </div>
    )
}
 