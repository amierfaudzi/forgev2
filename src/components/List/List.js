import React from 'react';
import './List.scss';
import { ReactComponent as Anvil } from '../../assets/icons/icons8-metal.svg'

export default function List({list, skillInfo, setSkillInfo, notify}) {

    //construct the skill here
    const skillDetails = {
        playlistId: list.id.playlistId,
        channelTitle: list.snippet.channelTitle,
        title: list.snippet.title,
        thumbnailUrl: list.snippet.thumbnails.medium.url,
        description: list.snippet.description
    }

    const handleClick = () => {
        setSkillInfo(skillInfo={...skillInfo, ...skillDetails});
        notify("Skill has been added");
        console.log(skillInfo);
    }

    return (
        <>
        <div className="card">
            <div className="card__content">
                <img src={skillDetails.thumbnailUrl} alt="" className="card__image"/>
                <p className="card__title">{skillDetails.title}</p>
            </div>
            <div className="card__synopsis">
                <p className="card__title">{skillDetails.title} by {skillDetails.channelTitle}</p>
                <p className="card__description">{skillDetails.description}</p>
                <button className="list__button" onClick={handleClick}><Anvil className="icon-anvil"/> Add to kiln </button>
            </div>
        </div>
        </>


    )
}
