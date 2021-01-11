import React from 'react';
import './AddSkillModal.scss';

export default function AddSkillModal({isVisible, toggleModal, notify}) {
    
    if(isVisible){
        return (
            <div className="modal">
                <div className="modal__content">
                    <div className="modal__title">
                        This is the title
                        <button onClick={notify}>Notify me~</button>
                        <button onClick={toggleModal}>Close</button>
                    </div>
                    <div className="modal__body">
                        This is the body
                    </div>
                </div>
            </div>
    
        )
    } else {
        return ""
    } 
}
