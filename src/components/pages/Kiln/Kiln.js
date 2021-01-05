import React, { useEffect, useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { UserContext } from '../../../context/UserContext';
import Unauthorized from '../Unauthorized/Unauthorized';
import SkillGenerator from '../../SkillGenerator/SkillGenerator';
import './Kiln.scss';
import axios from 'axios';
import SkillList from '../../SkillList/SkillList';
import HexagonList from '../../HexagonList/HexagonList';
import { PlaylistContext } from '../../../context/PlaylistContext';

export default function Kiln() {

    let [ skill, setSkill] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    let [skillList, setSkillList] = useState([]);
    const token = localStorage.FBIdToken;
    
    useEffect(() => {
        console.log("This has run")
        axios.get('/skills').then(res=> {
            console.log(res.data);
            setSkillList(skillList = res.data)
        }).catch(err=>console.log(err))
    }, [])

    if(token){
        return (

            <div className="main main-kiln">
                <h1>"Keep the fire burning and strike the metal when it is hot"</h1>
    
                <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                    <TabList>
                        <Tab>Add Skill</Tab>
                        <Tab>Forge skill</Tab>
                        <Tab>Hexagon</Tab>
                    </TabList>
                
                    <TabPanel>
                    <div className='step-progress'>
                        <SkillGenerator skill={skill} setSkill={setSkill} setTabIndex={setTabIndex}/>
                    </div>
                    </TabPanel>
                    <TabPanel>
                    {skillList ? skillList.map(skill=> {
                        return <SkillList key={skill.playlistId} skill={skill}/>
                    }) : <h2>Add a skill!</h2>}
                    </TabPanel>
                    <TabPanel>
                        <HexagonList/>
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
