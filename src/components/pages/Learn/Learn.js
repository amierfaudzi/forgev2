import React, { useContext, useState, useEffect } from 'react';
import Note from '../../Note/Note';
import VideoPlayer from '../../VideoPlayer/VideoPlayer';
import './Learn.scss';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import { ReactComponent as NotePad } from '../../../assets/icons/icons8-notepad.svg';
import { ReactComponent as X } from '../../../assets/icons/icons8-xamarin.svg';
import { ReactComponent as Save } from '../../../assets/icons/icons8-save.svg';
import { PlaylistContext } from '../../../contexts/PlaylistContext';
import axios from 'axios';

export default function Learn() {

    let { activePlaylist } = useContext(PlaylistContext);
    // console.log("This is the activeplaylist", activePlaylist)
    console.log(activePlaylist)

    const [openPanel, setOpenPanel] = useState(false);
    let [note, setNote] = useState({noteContent: ''});
    let [videoPosition, setVideoPosition] = useState(activePlaylist.currentVideo)
    let [videoId, setVideoId] = useState(activePlaylist.videos[videoPosition].videoId);

    useEffect(() => {
        // // KIV till later
        // console.log("This is from the learn")
        // axios.get('/note', {
        //     videoId: videoId
        // })
        // .then(res => {console.log(res)})
        // .catch(err => console.log(err))
    }, [activePlaylist.currentVideo])

    return (
        <div className="learn">
            <div>
                <h1>Now forging: {activePlaylist.title}</h1>
            </div>
            <VideoPlayer />

            <div>
                <NotePad className="icon-action" onClick={() => setOpenPanel(true)}/>
            </div>

            <div className="learn__controls">
                <h3 className="learn__subtitle">{activePlaylist.skillName} Playlist</h3>
                <div className="controls-videos">
                    {activePlaylist.videos.filter(data => data.position !== activePlaylist.currentVideo).map(data=>{
                        return (
                            <div className="controls-video--item">
                                <img src={data.thumbnail} alt=""/>
                                <p>{data.title}</p>
                            </div> 
                        )
                    })}
                </div>
            </div>
            <SlidingPanel
                type={'bottom'}
                isOpen={openPanel}
                size={34}
                noBackdrop
            >
                <div className="learn__note">
                    <Note note={note} setNote={setNote}/>
                    <X className="icon-action" onClick={() => setOpenPanel(false)}/>
                    <Save className="icon-action icon-action--second"/>
                </div>
            </SlidingPanel>
        </div>
    )
}
