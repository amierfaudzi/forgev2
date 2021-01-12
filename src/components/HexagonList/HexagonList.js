import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DormantHex from '../DormantHex/DormantHex';
import './HexagonList.scss';

export default function HexagonList({handleSkill, toggleModal}) {
 
  let [ skill, setSkill ] = useState('');
  let history = useHistory();

  useEffect(() => {
    axios.get('/skills')
    .then(res => {
      console.log(res.data);
      setSkill(skill=res.data);
    })
    .catch(err => {
      alert("Please log in or sign up to view your skill")
    })
  }, [])
  
 return (
  <div>
               {skill ? 
                <div>
                <ul className="honeycomb">
                    {/* <li className="honeycomb-cell" onClick={toggleModal}>
                        <div className="honeycomb-cell__title">Add a new skill</div>
                    </li> */}
                    <li className="honeycomb-cell" onClick={handleSkill}>
                        <img className="honeycomb-cell__image" src="https://source.unsplash.com/random/1"/>
                        <div className="honeycomb-cell__title">Skill I</div>
                    </li>
                    <li className="honeycomb-cell" onClick={handleSkill}>
                        <img className="honeycomb-cell__image" src="https://source.unsplash.com/random/2"/>
                        <div className="honeycomb-cell__title">Skill II</div>
                    </li>
                    <li className="honeycomb-cell" onClick={handleSkill}>
                        <img className="honeycomb-cell__image" src="https://source.unsplash.com/random/3"/>
                        <div className="honeycomb-cell__title">Skill II</div>
                    </li>
                    <li className="honeycomb-cell" onClick={handleSkill}>
                        <img className="honeycomb-cell__image" src="https://source.unsplash.com/random/4"/>
                        <div className="honeycomb-cell__title">Skill II</div>
                    </li>
                    <li className="honeycomb-cell" onClick={handleSkill}>
                        <img className="honeycomb-cell__image" src="https://source.unsplash.com/random/5"/>
                        <div className="honeycomb-cell__title">Skill I</div>
                    </li>
                    <li className="honeycomb-cell" onClick={handleSkill}>
                        <img className="honeycomb-cell__image" src="https://source.unsplash.com/random/5"/>
                        <div className="honeycomb-cell__title">Skill I</div>
                    </li>
                    <li className="honeycomb-cell" onClick={handleSkill}>
                        <img className="honeycomb-cell__image" src="https://source.unsplash.com/random/5"/>
                        <div className="honeycomb-cell__title">Skill I</div>
                    </li>
                    <li class="honeycomb-cell honeycomb__placeholder"></li>
                </ul>
            </div>
            : ''}
  </div>
 )
  
}



// add the skill constructor
// -> modal
// toast notification
// also generate the skill from the user