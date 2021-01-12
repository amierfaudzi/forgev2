import React from 'react'

export default function ActiveHex({skill}) {
    return (
        <li className="honeycomb-cell" onClick={handleSkill}>
            <img className="honeycomb-cell__image" src={data.thumbnailUrl}/>
            <div className="honeycomb-cell__content">
                <h3 className="honeycomb-cell__title">{data.skillName}</h3>
                {/* <p className="honeycomb-cell__description">{data.skillDescription}</p> */}
            </div>
        </li>
    )
}
