import React, { useContext, useState } from 'react';
import Note from '../../Note/Note';
import VideoPlayer from '../../VideoPlayer/VideoPlayer';
import './Learn.scss';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import { ReactComponent as NotePad } from '../../../assets/icons/icons8-notepad.svg';
import { ReactComponent as X } from '../../../assets/icons/icons8-xamarin.svg';
import { ReactComponent as Save } from '../../../assets/icons/icons8-save.svg';
import { PlaylistContext } from '../../../contexts/PlaylistContext';

export default function Learn() {

    let { activePlaylist } = useContext(PlaylistContext);
    // console.log("This is the activeplaylist", activePlaylist)
    console.log(activePlaylist)

    const [openPanel, setOpenPanel] = useState(false);

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
                    <Note/>
                    <X className="icon-action" onClick={() => setOpenPanel(false)}/>
                    <Save className="icon-action icon-action--second"/>
                </div>
            </SlidingPanel>
        </div>
    )
}
