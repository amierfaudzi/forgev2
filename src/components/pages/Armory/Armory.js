import React, { useEffect, useState } from 'react';
import './Armory.scss';
import HexagonList from '../../HexagonList/HexagonList';
import AddSkillModal from '../../AddSkillModal/AddSkillModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import HexagonWebtiki from '../../HexagonWebtiki/HexagonWebtiki';
import { useHistory } from 'react-router-dom';

export default function Armory() {

    let [ skill, setSkill ] = useState('');
    let history = useHistory();
    const isGrandKeep = false;
    
    // Calling the skill
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

    // Search Playlist
    let [ searchedPlaylist, setSearchPlaylist ] = useState([]);

    // Toast notification maker
    const notify = (message) => {

        toast(message, {
            type: toast.TYPE.SUCCESS,
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    const handleSkill = () => {
        history.push('/learn');
    }

    let [isVisible, setIsVisible] = useState(false);

    const toggleModal = () => {
        console.log("This is isVisible", isVisible)
        if(searchedPlaylist){
            setSearchPlaylist([])
        }
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <div className="armory__title">
                This is the armory

                <button onClick={()=>{notify("Toast")}}>Toast</button>
            </div>

            <HexagonWebtiki handleClick={handleSkill} skill={skill} toggleModal={toggleModal} isGrandKeep={isGrandKeep}/>

            <AddSkillModal isVisible={isVisible} toggleModal={toggleModal} notify={notify} searchedPlaylist={searchedPlaylist} setSearchPlaylist={setSearchPlaylist}/>

            <ToastContainer/>
        </div>
    )
}
