import React from 'react';
import './HexagonWebtiki.scss';
import forging from '../../assets/images/forged4.jpg';

// Code from https://github.com/web-tiki/responsive-grid-of-hexagons

export default function HexagonWebtiki({handleSkill, skill, toggleModal}) {

    return (
        <div>
            <ul id="hexGrid">
            <li className="hex" onClick={toggleModal}>
                <div className="hexIn">
                <div className="hexLink">
                    <img src={forging} alt="" />
                    <h1>Add a skill</h1>
                    <p>Begin your journey now!</p>
                </div>
                </div>
            </li>
            { skill ? skill.map(data => {
                return (
                    <li className="hex" onClick={handleSkill}>
                    <div className="hexIn">
                    <div className="hexLink">
                        <img src={data.thumbnailUrl} alt=""/>
                        <h1>{data.skillName}</h1>
                        <p>{data.skillDescription}</p>
                    </div>
                    </div>
                </li>
                )
            }) : ""}
    </ul>
        </div>
    )
}
