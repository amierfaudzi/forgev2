import React from 'react';
import './HexagonWebtiki.scss';
import forging from '../../assets/images/forged4.jpg';
import HexTile from '../HexTile/HexTile';

// Code from https://github.com/web-tiki/responsive-grid-of-hexagons

export default function HexagonWebtiki({handleClick, skill, toggleModal, isGrandKeep}) {

    return (
        <div>
            <ul id="hexGrid">
            {!isGrandKeep ? 
                        <li className="hex" onClick={toggleModal}>
                        <div className="hexIn">
                        <div className="hexLink">
                            <img src={forging} alt="" />
                            <h1>Add a skill</h1>
                            <p>Begin your journey now!</p>
                        </div>
                        </div>
                    </li>
                    : ""
            }

            { skill ? skill.map(data => {
                return (
                    <HexTile key={data.skillId} data={data}/>
                )
            }) : ""}
    </ul>
        </div>
    )
}
