import React, { useContext, useEffect, useState } from 'react';
import './VideoPlayer.scss';
import ReactPlayer from 'react-player/youtube';
import { PlaylistContext } from '../../contexts/PlaylistContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VideoPlayer() {

    let { activePlaylist } = useContext(PlaylistContext);
    let [videoPosition, setVideoPosition] = useState(activePlaylist.currentVideo)
    let [playingVideo, setPlayingVideo] = useState(activePlaylist.videos[videoPosition]);
    let [videoId, setVideoId] = useState(activePlaylist.videos[videoPosition].videoId);
    let [currentUrl, setCurrentUrl] = useState(`https://www.youtube.com/watch?v=${videoId}`)

    const handleEnded = () => {
        console.log("this has ended");
        //level up
        axios.post('/user/level')
        .then(res=>{
            console.log(res);
            notify(res.data)
        })
        .catch(err=>console.log(err))
        //change the video position to + 1 and send that request
        setVideoPosition(videoPosition++)
        //another axios request to increase the current video counter, notes ons
    };

    // toast 
    const notify = (message) => {

        toast(message, {
            type: toast.TYPE.SUCCESS,
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }


    return (
        <section className="video-player">
            <div className="video-player__container">

                <ReactPlayer
                url={currentUrl}
                controls
                onEnded={handleEnded}
                width={`854px`}
                height={`480px`}
                />
            </div>

            <ToastContainer />

            <div className="all-video">
                
            </div>

        </section>
    )
}