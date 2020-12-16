import React from 'react';
import { useHistory } from 'react-router-dom';
import './SkillList.scss';
import { ReactComponent as Hammer } from '../../assets/icons/icons8-hammer.svg';

export default function SkillList({skill}) {

    let history = useHistory();
    console.log(skill)
    const handleLearn = () => {
        history.push('/learn')
    }
    return (
        <div className="skillList">
            <img src={skill.thumbnailUrl} alt="" className="skillList__image"/>
            <div className="skillList__info">
                <div className="skillList__info--details">
                    <p className="skillList__content">{skill.skillName}</p>
                    <p>{skill.skillDescription}</p>
                    <p className="skillList__content">By : {skill.channelTitle}</p>
                    <p>{skill.title}</p>
                </div>
                <div className="skillList__info--summary">
                    <h2>Progress</h2>
                </div>
            </div>
            <Hammer onClick={handleLearn} className="skillList__icon"/>
        </div>
    )
}
