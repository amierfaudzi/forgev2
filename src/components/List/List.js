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
        <>
        <div className="card">
            <div className="card__content">
                <img src={skillInfo.thumbnailUrl} alt="" className="card__image"/>
                <p className="card__title">{skillInfo.title}</p>
            </div>
            <div className="card__synopsis">
                <p className="card__title">{skillInfo.title} by {skillInfo.channelTitle}</p>
                <p className="card__description">{skillInfo.description}</p>
                <button className="list__button" onClick={handleClick}><Anvil className="icon-anvil"/> Add to kiln </button>
            </div>
        </div>
        </>


    )
}
