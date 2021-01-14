import React, { useState } from 'react';
import './AddSkillModal.scss';
import Stepper from 'react-stepper-horizontal';
import axios from 'axios';
import { ReactComponent as Next } from '../../assets/icons/icons8-chevron-right.svg';
import { ReactComponent as Prev } from '../../assets/icons/icons8-chevron-left.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/icons/icons8-youtube-squared.svg'
import { ReactComponent as Plus } from '../../assets/icons/icons8-plus-math.svg';
import { ReactComponent as X } from '../../assets/icons/icons8-xamarin.svg';
import { ReactComponent as Hammer } from '../../assets/icons/icons8-hammer.svg';
import List from '../List/List';
import SkillCard from '../SkillCard/SkillCard';

export default function AddSkillModal({isVisible, toggleModal, notify, searchedPlaylist, setSearchPlaylist}) {

    // Navigation
    const [currentPage, setCurrentPage] = useState(1);

    const sections = [
      { title: 'Name and Description', onClick: () => setCurrentPage(1) },
      { title: 'Add a Playlist', onClick: () => setCurrentPage(2) },
      { title: 'Generate Skill', onClick: () => setCurrentPage(3) },
    ];

    const next = () => setCurrentPage((prev) => prev + 1);
    const prev = () => setCurrentPage((prev) => prev - 1);

    // Youtube 
    const handleSkillSearch = (e) => {
        e.preventDefault();
        const query = e.target.searchInput.value;
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=playlist&order=viewCount&relevanceLanguage=en&maxResults=24&q=${query}&key=${process.env.REACT_APP_API_KEY}`,
        { transformRequest: (data, headers) => {
          delete headers.common['Authorization'];
      }})
        .then(res=>{
          console.log(res.data.items);
          setSearchPlaylist(searchedPlaylist = res.data.items);
        })
        .catch(err=>console.log(err))
    }

    // Skill generator
    let [skillInfo, setSkillInfo] = useState()

    // skill name and description
    const handleSkillInfo = (e) => {
        e.preventDefault();
        setSkillInfo(skillInfo = {
          skillName: e.target.skillName.value,
          skillDescription: e.target.skillDescription.value
        });
        e.target.reset();
          setCurrentPage((prev) => prev + 1)
    }

    const handleGenerateSkill = (e) => {
        e.preventDefault();
        axios({
          method: 'post',
          url: '/skills',
          data: {...skillInfo}})
        .then(res=>{
          notify(res.data)
        })
        .catch(err=>console.log(err));
    };
    
    if(isVisible){
        return (
            <div className="modal">
                <div className="modal__content">
                    <div className="modal__title">

                        <Stepper
                          steps={sections}
                          activeStep={currentPage}
                          activeColor="red"
                          defaultBarColor="red"
                          completeColor="green"
                          completeBarColor="green"
                        />
                        <X className="icon-close" onClick={toggleModal}/>

                    </div>
                    <div className="modal__body">
                    {currentPage === 1 && (
                          <form onSubmit={handleSkillInfo}>
                          <div className="tray tray--first">
                            <div></div>
                            Page 1
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
                        <div>
                            <div className="tray">
                                <Prev onClick={prev} className="icon"/>
                                Page 2
                                <Next onClick={next} className="icon"/>
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={handleSkillSearch} className="form form--youtube-search">
                                    <div className="search-box">
                                    <div className="form__field">
                                        <label htmlFor="searchInput" className="form__label">Search for Playlists on Youtube</label>
                                        <input type="text" name="searchInput" className="form__text"/>
                                    </div>
                                    
                                    <button type="submit" className="form__button">Search</button>
                                    </div>
                                </form>
                            </div>
                            {searchedPlaylist ? 
                          <div className="search-container">
                            {searchedPlaylist.map(list=>{
                              return <List key={list.id.playlistId} list={list} skillInfo={skillInfo} setSkillInfo={setSkillInfo} notify={notify}/> 
                            })}
                          </div>
                          : ""}
                        </div>
                    )}
            
                    {currentPage === 3 && (
                          <form onSubmit={handleGenerateSkill}>
                          <div className="tray">
                            <Prev onClick={prev} className="icon"/>
                            <h3>Skill Summary</h3>
                            {skillInfo.playlistId ?  
                            <button type='submit' className="generate-button">Add <Hammer className="icon-hammer"/></button> :
                            <button disabled type='submit' className="generate-button">Add <Hammer className="icon-hammer"/></button> }
                            
                          </div>
                          
                          {skillInfo.playlistId ? <SkillCard skill={skillInfo} setSkill={setSkillInfo} notify={notify}/> : "Please select a playlist first!"}
                        </form>
                    )}
                    </div>
                </div>
            </div>
    
        )
    } else {
        return ""
    } 
}
