import React, { useContext, useState } from 'react';
import Note from '../../Note/Note';
import VideoPlayer from '../../VideoPlayer/VideoPlayer';
import './Learn.scss';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import { ReactComponent as NotePad } from '../../../assets/icons/icons8-notepad.svg';
import { ReactComponent as X } from '../../../assets/icons/icons8-xamarin.svg';
import { ReactComponent as Save } from '../../../assets/icons/icons8-save.svg';

export default function Learn() {

    // let { activePlaylist } = useContext(PlaylistContext);
    // console.log("This is the activeplaylist", activePlaylist)

    const [openPanel, setOpenPanel] = useState(false);

    return (
        <div className="learn">
            <div>
                <h1>Skill is: any skill</h1>
            </div>
            <VideoPlayer />
            <div className="learn__controls">
                <h2>Controller</h2>
                <div>
                    <NotePad className="icon-action" onClick={() => setOpenPanel(true)}/>
                </div>
            </div>
            <SlidingPanel
                type={'bottom'}
                isOpen={openPanel}
                size={40}
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
