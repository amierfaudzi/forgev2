import React, { useContext, useEffect } from 'react';
import './VideoPlayer.scss';
import ReactPlayer from 'react-player/youtube';
import { PlaylistContext } from '../../context/PlaylistContext';

export default function VideoPlayer() {

    let { currentVideo, activePlaylist } = useContext(PlaylistContext);
    let videoPositionId;
    
    useEffect(() => {
        //check the current position on the playlist
        //filter
    }, [])

    return (
        <section className="video-player">
            <div className="video-player__container">
            <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoPositionId}`}
            controls
            />
            </div>
            <div className="video-player__info">
                <h2>This is the video title</h2>
                <p>This is the video description</p>
                <p>This is video 5 out of 40</p>
            </div>
        </section>
    )
}