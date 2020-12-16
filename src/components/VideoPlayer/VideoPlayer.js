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
            <div className="video-player__info">
                <h2>This is the video title</h2>
                <p>This is the video description</p>
                <p>This is video 5 out of 40</p>
            </div>
        </section>
    )
}

//need to have title and next video in the playlist