import React from 'react';
import Note from '../../Note/Note';
import VideoPlayer from '../../VideoPlayer/VideoPlayer';
import './Learn.scss';

export default function Learn() {

    console.log(window.location.href)

    return (
        <div className="main main-learn">
            <div className="main-learn__title">
                <h2>Learn stuff lolz</h2>
            </div>
            {/* Need a player and a note taker */}
            <div className="content">
                <VideoPlayer />
                <Note />
            </div>


        </div>
    )
}
