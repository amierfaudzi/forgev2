import React, { useState } from 'react';
import './AddSkillModal.scss';
import Stepper from 'react-stepper-horizontal';
import { ReactComponent as Next } from '../../assets/icons/icons8-chevron-right.svg';
import { ReactComponent as Prev } from '../../assets/icons/icons8-chevron-left.svg';

export default function AddSkillModal({isVisible, toggleModal, notify}) {

    const [currentPage, setCurrentPage] = useState(1);

    const sections = [
      { title: 'Skill Name and Description', onClick: () => setCurrentPage(1) },
      { title: 'Add a Playlist', onClick: () => setCurrentPage(2) },
      { title: 'Generate Skill!', onClick: () => setCurrentPage(3) },
    ];

    const next = () => setCurrentPage((prev) => prev + 1);
    const prev = () => setCurrentPage((prev) => prev - 1);
    
    if(isVisible){
        return (
            <div className="modal">
                <div className="modal__content">
                    <div className="modal__title">
                        This is the title
                        <button onClick={notify}>Notify me~</button>
                        <button onClick={toggleModal}>Close</button>

                        <Stepper
                          steps={sections}
                          activeStep={currentPage}
                          activeColor="red"
                          defaultBarColor="red"
                          completeColor="green"
                          completeBarColor="green"
                        />

                    </div>
                    <div className="modal__body">
                    {currentPage === 1 && (
                        <div>
                            Page 1
                            <div className="tray tray--first">
                                <Next onClick={next} className="icon"/>
                            </div>
                        </div>
                    )}
            
                    {currentPage === 2 && (
                        <div>
                            Page 2
                            <div className="tray">
                                <Prev onClick={prev} className="icon"/>
                                <Next onClick={next} className="icon"/>
                            </div>
                        </div>
                    )}
            
                    {currentPage === 3 && (
                        <div>
                            Page 3
                            <div className="tray">
                                <Prev onClick={prev} className="icon"/>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
    
        )
    } else {
        return ""
    } 
}
