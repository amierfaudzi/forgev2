import React, { useContext } from 'react';
import Note from '../../Note/Note';
import VideoPlayer from '../../VideoPlayer/VideoPlayer';
import './Learn.scss';
import { PlaylistContext } from '../../../contexts/PlaylistContext';

export default function Learn() {

    // let { activePlaylist } = useContext(PlaylistContext);
    // console.log("This is the activeplaylist", activePlaylist)

    return (
        <div className="main main-learn">
            <div className="content">
                {/* <VideoPlayer />
                <Note /> */}
                <h1 className="main-learn__title">This is the learn page</h1>
            </div>

        </div>
    )
}
