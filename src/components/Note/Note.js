
import React, { useState } from 'react'
import './Note.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Note() {

    const debounce = (a,b,c) => {
        var d,e;
        return function(){
          function h(){
            d=null;
            c||(e=a.apply(f,g));
          }
          var f=this,g=arguments;
          return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
        }
    }

    let [note, setNote] = useState({noteContent: ''});

    const updateBody = async (value) => {
        console.log("THis is the note and note content", note);
        await setNote({noteContent: value});
        update();
    }

    const update = debounce(()=>{
        console.log("DB is being updated")
    }, 5000)

    return (
        <section className="note">
            <div className="note__input">
                <ReactQuill 
                value={note.noteContent}
                onChange={updateBody}
                >
                </ReactQuill>
            </div>
        </section>
    )
}
