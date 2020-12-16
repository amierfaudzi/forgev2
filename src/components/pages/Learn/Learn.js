import React from 'react';
import Note from '../../Note/Note';
import VideoPlayer from '../../VideoPlayer/VideoPlayer';
import './Learn.scss';

export default function Learn() {

    return (
        <div className="main main-learn">
            <div className="content">
                <VideoPlayer />
                <Note />
            </div>

        </div>
    )
}
