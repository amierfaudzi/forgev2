import React, { useState, useContext } from 'react';
import Stepper from 'react-stepper-horizontal';
import axios from 'axios';
import List from '../List/List';
import { PlaylistContext } from '../../context/PlaylistContext';
import SkillCard from '../SkillCard/SkillCard';
import './SkillGenerator.scss';
import { ReactComponent as Next } from '../../assets/icons/icons8-chevron-right.svg';
import { ReactComponent as Prev } from '../../assets/icons/icons8-chevron-left.svg';
import { ReactComponent as Youtube } from '../../assets/icons/icons8-youtube-squared.svg'
import { ReactComponent as Plus } from '../../assets/icons/icons8-plus-math.svg'

const SkillGenerator = ({ skill, setSkill, setTabIndex}) => {

  const { searchedPlaylist, handleSearchPlaylist, addedPlaylist } = useContext(PlaylistContext);
  const token = localStorage.FBIdToken;
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
      setCurrentPage((prev) => prev + 1)
  }

  const handleSkillSearch = (e) => {
    e.preventDefault();
    const query = e.target.searchInput.value;
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=playlist&order=viewCount&relevanceLanguage=en&maxResults=24&q=${query}&key=${process.env.REACT_APP_API_KEY}`,
    { transformRequest: (data, headers) => {
      delete headers.common['Authorization'];
  }})
    .then(res=>{
      handleSearchPlaylist(res.data.items);
    })
    .catch(err=>console.log(err))
  }

  const handleGenerateSkill = (e) => {
    e.preventDefault();
    axios.defaults.headers.common['Authorization'] = token;
    axios({
      method: 'post',
      url: '/skills',
      data: {...addedPlaylist}})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

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
            <div className="tray tray--first">
              <Next onClick={next} className="icon"/>
            </div>
            
            <div className="form form--skill-info">
              <div className="form__field">
                <label htmlFor="skillName" className="form__label">Skill Name</label>
                <input type="text" name="skillName" id="skillName" placeholder="skill name" className="form__text skill__title"/>
              </div>
              <div className="form__field">
                <label htmlFor="skillDescription" className="form__label">Skill Description</label>
                <textarea name="skillDescription" id="skillDescription" placeholder="skill description" className="form__text skill__description"></textarea>
              </div>
              <button type="submit" className="form__button">Continue</button>
            </div>
          </form>
        )}

        {currentPage === 2 && (
          <>
            <div className="tray">
              <Prev onClick={prev} className="icon"/>
              <Next onClick={next} className="icon"/>
            </div>
            <div className="form-wrapper">
              <form onSubmit={handleSkillSearch} className="form form--youtube-search">
                <Youtube/>
                <div className="search-box">
                  <div className="form__field">
                    <label htmlFor="searchInput" className="form__label">Search for Playlists on Youtube</label>
                    <input type="text" name="searchInput" className="form__text"/>
                  </div>
                  
                  <button type="submit" className="form__button">Search</button>
                </div>
              </form>
            </div>
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
              <button type='submit' className="generate-button">Generate <Plus className="icon-plus icon-plus--disabled"/></button> :
              <button disabled type='submit' className="generate-button">Generate<Plus className="icon-plus icon--active"/></button> }
            </div>
            <h3>Skill Summary</h3>
            {skill.playlistId ? <SkillCard skill={skill}/> : "Please select a playlist first!"}
          </form>
        )}
    </>
  );
};

export default SkillGenerator;