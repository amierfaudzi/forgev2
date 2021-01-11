import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './HexagonList.scss';

export default function HexagonList({handleSkill, toggleModal}) {
 
  let [ skill, setSkill ] = useState('');

  useEffect(() => {
    axios.get('/skills')
    .then(res => {
      console.log(res.data);
      setSkill(skill=res.data);
    })
    .catch(err => console.log(err))
  }, [])
  
  if(skill){
    return (

      <ul className="honeycomb">
        <li className="honeycomb-cell honeycomb-cell--dormant" onClick={toggleModal}>
            <div className="honeycomb-cell__title">Add a new skill</div>
        </li>

        {skill.map(data => {

          return(
          <li className="honeycomb-cell" onClick={handleSkill}>
            <img className="honeycomb-cell__image" src={data.thumbnailUrl}/>
            <div className="honeycomb-cell__content">
              <h3 className="honeycomb-cell__title">{data.skillName}</h3>
              <p className="honeycomb-cell__description">{data.skillDescription}</p>
            </div>
          </li>
          )
        })}

      </ul>
  
      )
  } else {
    return ""
  }
}


// add the skill constructor
// -> modal
// toast notification
// also generate the skill from the user