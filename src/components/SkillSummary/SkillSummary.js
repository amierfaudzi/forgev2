import React, { useEffect, useState } from 'react';
import './SkillSummary.scss';
import axios from 'axios';

export default function SkillSummary() {

    let [skillData, setSkillData] = useState('');
    const dummyArray = ['', '', '', ''];

    useEffect(() => {
        axios.get('/skills')
        .then(res => {
            setSkillData(skillData = res.data)
            console.log(skillData)
        })
        .catch(err => console.log(err))
    }, [])

    if(skillData) {
        return (
            <div className="skillSummary">
                <div className="previously-watched">
                    {skillData.length > 0 ? skillData.map((data, index)=> {
                        if(index == 0){
                            return (
                                <div className="main-skill">
                                    <h2>{data.title}</h2>
                                    <img className="main-skill__image" src={data.thumbnailUrl} alt=""/>
                                </div>
                            )
                        } 
                    }) : 
                    <div className="main-skill main-skill--dummy">
                    </div>
                }
                </div>
                <div className="other-container">
                    { dummyArray.map((data, index)=> {
                        // if(index > 0 && index < 4){
                        //     return (
                        //         <div className="other-skills">
                        //             <p>{data.title}</p>
                        //             <img className="other-skills__image" src={data.thumbnailUrl} alt=""/>
                        //         </div>
                        //     )
                        // }
                        if(index > 0 && index < 4) {
                            if(skillData[index]){
                                return (
                                    <div className="other-skills">
                                        <p>{data.title}</p>
                                        <img className="other-skills__image" src={data.thumbnailUrl} alt=""/>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="dummy-skill">

                                    </div>
                                )
                            }
                        }
                    })}
                </div>
    
    
            </div>
        )
    } else {
        return (
            <h2>Fetching Data</h2>
        )
    }
}
