import React, { useState, useContext, useEffect } from 'react';
import Stepper from 'react-stepper-horizontal';
import axios from 'axios';
import List from '../List/List';
import { PlaylistContext } from '../../context/PlaylistContext';
import SkillCard from '../SkillCard/SkillCard';
import './SkillGenerator.scss';
import { UserContext } from '../../context/UserContext';
import { ReactComponent as Next } from '../../assets/icons/icons8-chevron-right.svg';
import { ReactComponent as Prev } from '../../assets/icons/icons8-chevron-left.svg';

const token = localStorage.FBIdToken;

const SkillGenerator = ({ skill, setSkill, setTabIndex}) => {

  const { searchedPlaylist, handleSearchPlaylist, addedPlaylist } = useContext(PlaylistContext);

  const [currentPage, setCurrentPage] = useState(1);

  const sections = [
    { title: 'Skill Name and Description', onClick: () => setCurrentPage(1) },
    { title: 'Add a Playlist', onClick: () => setCurrentPage(2) },
    { title: 'Generate Skill!', onClick: () => setCurrentPage(3) },
  ];

  const handleSkillInfo = (e) => {
    e.preventDefault();
    setSkill(skill = {
      skillName: e.target.skillName.value,
      skillDescription: e.target.skillDescription.value
    });
    e.target.reset();
      console.log("This is the skill>>> ", skill);
      setCurrentPage((prev) => prev + 1)
  }

  const handleSkillSearch = (e) => {
    e.preventDefault();
    const query = e.target.searchInput.value;

    axios.defaults.headers.common['Authorization'] = token;

    axios({
      method: 'get',
      url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=playlist&order=viewCount&relevanceLanguage=en&maxResults=25&q=${query}&key=${process.env.REACT_APP_API_KEY}`,
    }) 
    .then(res=>{
      handleSearchPlaylist(res.data.items);
    })
    .catch(err=>console.log(err))
  }

  const handleGenerateSkill = (e) => {
    e.preventDefault();
    //axios call to the skill route
    setTabIndex(1);
  };

  const next = () => setCurrentPage((prev) => prev + 1);
  const prev = () => setCurrentPage((prev) => prev - 1);

  return (
    <>
      <h1>Let's Add a Skill</h1>
        <Stepper
          steps={sections}
          activeStep={currentPage}
          activeColor="red"
          defaultBarColor="red"
          completeColor="green"
          completeBarColor="green"
        />

        {currentPage === 1 && (
          <form onSubmit={handleSkillInfo}>
            <div className="tray">
              <Next type="submit" onClick={next} className="icon icon--first"/>
            </div>
            
            <div style={{ display:'flex', flexDirection:'column'}}>
              <div>
                <label htmlFor="skillName">Skill Name</label>
                <input type="text" name="skillName" id="skillName" placeholder="skill name" className="skill__title"/>
              </div>
              <div>
                <label htmlFor="skillDescription">Skill Description</label>
                <textarea name="skillDescription" id="skillDescription" placeholder="skill description" className="skill__description"></textarea>
              </div>
            </div>
          </form>
        )}

        {currentPage === 2 && (
          <>
            <div className="tray">
              <Prev onClick={prev} className="icon"/>
              <Next onClick={next} className="icon"/>
            </div>
            <form onSubmit={handleSkillSearch}>
                <input type="text" name="searchInput"/>
                <button type="submit">Search</button>
                {/**Generate a list with a button that can let me add the video here*/}
            </form>
            <div className="videoSearchList">
            {searchedPlaylist ? 
            <>
              {searchedPlaylist.map(list=>{
                return <List key={list.id.playlistId} list={list} skill={skill} setSkill={setSkill}/> 
              })}
            </>
            : ""}
            </div>
          </>
        )}

        {currentPage === 3 && (
          <form onSubmit={handleGenerateSkill}>
            <div className="tray">
              <Prev onClick={prev} className="icon"/>
              {skill.playlistId ?  
              <button type='submit'>Generate</button> :
              <button disabled type='submit'>Generate</button> }
            </div>
            <h3>Skill Summary</h3>
            {skill.playlistId ? <SkillCard skill={skill}/> : "Please select a playlist first!"}
          </form>
        )}
    </>
  );
};

export default SkillGenerator;