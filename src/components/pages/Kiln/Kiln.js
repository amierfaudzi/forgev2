import React, { useEffect, useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { UserContext } from '../../../context/UserContext';
import Unauthorized from '../Unauthorized/Unauthorized';
import SkillGenerator from '../../SkillGenerator/SkillGenerator';
import { Link } from 'react-router-dom';
import './Kiln.scss';
import axios from 'axios';

export default function Kiln() {

    const { user } = useContext(UserContext);
    let [ skill, setSkill] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
    //call the current skill from the user profile
    axios.get('/skills')
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    
    }, [])

    if(user){
        return (

            <div className="main main-kiln">
                <h1>"Keep the fire burning and strike the metal when it is hot"</h1>
    
                <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                    <TabList>
                        <Tab>Add Skill</Tab>
                        <Tab>Forge skill</Tab>
                    </TabList>
                
                    <TabPanel>
                    <div className='step-progress'>
                        <SkillGenerator skill={skill} setSkill={setSkill} setTabIndex={setTabIndex}/>
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="skill-list">
                        <p>How to git gud</p>
                        <p>I want to git gud and this series is my best bet</p>
                        <Link to='/learn'>
                            <button>Learn</button>
                        </Link>
                    </div>
                    </TabPanel>
                </Tabs>
    
            </div>
        )
    } else {
        return (
            <Unauthorized/>
        )
    }
}
