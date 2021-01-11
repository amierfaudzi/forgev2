import React, { useEffect, useState } from 'react';
import './Armory.scss';
import HexagonList from '../../HexagonList/HexagonList';
import AddSkillModal from '../../AddSkillModal/AddSkillModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Armory() {

    const notify = (message) => {

        toast(message, {
            type: toast.TYPE.SUCCESS,
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    const call = () => {

        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => {
            console.log(res.data.title);
            notify(res.data.title);
        })
    }

    const handleSkill = () => {
        alert("Skill is clicked!")
    }

    let [isVisible, setIsVisible] = useState(false);

    const toggleModal = () => {
        console.log("This is isVisible", isVisible)
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <div className="armory__title">
                This is the armory
            </div>

            <div>
                {!isVisible ? <HexagonList handleSkill={handleSkill} toggleModal={toggleModal}/> : ""}
                
                <AddSkillModal isVisible={isVisible} toggleModal={toggleModal} notify={call}/>
            </div>
        </div>
    )
}
