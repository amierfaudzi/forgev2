import React from 'react';
import './VideoPlayer.scss';
import ReactPlayer from 'react-player/youtube';

export default function VideoPlayer() {
    return (
        <section className="video-player">
            <div className="video-player__container">
            <ReactPlayer
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            controls
            />
            </div>
        </section>
    )
}

//need to have title and next video in the playlist