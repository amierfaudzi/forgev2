import React from 'react';
import './List.scss';
import { ReactComponent as Anvil } from '../../assets/icons/icons8-metal.svg'
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
        alert("Skill has been added")
    }

    return (

        <div className="list">
            <img src={skillInfo.thumbnailUrl} alt="" className="list__image"/>
            <div className="list__body">
                <div className="list__info">
                    <p className="list__title">{skillInfo.title} by {skillInfo.channelTitle}</p>
                    <p>{skillInfo.description}</p>
                </div>
            <div className="list__cta">
                <button className="list__button" onClick={handleClick}><Anvil className="icon-anvil"/> Add to kiln </button>
            </div>
            </div>
        </div>

    )
}
