import React from 'react';
import './List.scss';

export default function List({list, skill, setSkill}) {

    //construct the skill here
    const skillInfo = {
        playlistId: list.id.playlistId,
        channelTitle: list.snippet.channelTitle,
        title: list.snippet.title,
        thumbnailUrl: list.snippet.thumbnails.medium.url,
        description: list.snippet.description
    }

    const handleClick = () => {
        setSkill(skill={...skill, ...skillInfo});
        console.log("This is the skill", skill)
    }

    return (

        <div className="list">
            <img src={skillInfo.thumbnailUrl} alt="" className="list__image"/>
            <div className="list__info">
                <p>{skillInfo.title} by {skillInfo.channelTitle}</p>
                <p>{skillInfo.description}</p>
                <div>
                    <button onClick={handleClick}>Add to kiln</button>
                </div>
            </div>
        </div>

    )
}
