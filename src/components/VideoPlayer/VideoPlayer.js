import React, { useContext, useEffect } from 'react';
import './VideoPlayer.scss';
import ReactPlayer from 'react-player/youtube';
import { PlaylistContext } from '../../context/PlaylistContext';
import axios from 'axios';

export default function VideoPlayer() {

    let { handleCurrentVideo, currentVideo, activePlaylist, handleActivePlaylist } = useContext(PlaylistContext);
    let videoPosition, videoId, currentUrl;

    const handleEnded = () => {
        console.log("this has ended");
        //level up
        axios.post('/user/level')
        .then(res=>{
            console.log(res);
            alert(res.data)
        })
        .catch(err=>console.log(err))
        //change the video position to + 1 and send that request
        videoPosition++;
        //another axios request to increase the current video counter, notes ons
    };

    useEffect(() => {
        //here is the code to update the video and stuff
        videoPosition = activePlaylist.currentVideo;
        handleCurrentVideo(activePlaylist.video[videoPosition]);
        videoId = (activePlaylist.video[videoPosition].videoId);
        currentUrl = `https://www.youtube.com/watch?v=${videoId}`;
        //console.log(currentVideo, activePlaylist, videoId)
    }, []);

    videoPosition = activePlaylist.currentVideo;
    videoId = (activePlaylist.video[videoPosition].videoId);
    currentUrl = `https://www.youtube.com/watch?v=${videoId}`;
    console.log(currentVideo, activePlaylist, videoId)

    if(currentVideo) {
        return (
            <section className="video-player">
                <div className="video-player__container">
                <ReactPlayer
                url={currentUrl}
                controls
                onEnded={handleEnded}
                />
                </div>
                <div className="video-player__info">
                    <h2>{currentVideo.title}</h2>
                    <p>{activePlaylist.skillName}</p>
                    <p>{activePlaylist.skillDescription}</p>
                    <p>This is video {currentVideo.position + 1} out of {activePlaylist.videoAmount}</p>
                </div>
            </section>
        )
    } else {
        return (
            <div>
                <h2>
                    Loading Video
                </h2>
            </div>
        )
    }
}