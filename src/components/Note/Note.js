
import React, { Component } from 'react';
import './Note.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

//Limiting write amount to the database
function debounce(a,b,c){
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

export default class Note extends Component {

    state={
        text: '',
        title: '',
        id: ''
    }

    render() {
        return (
            <section className="note">
                <div className="note__input">
                    <ReactQuill 
                    value={this.state.text}
                    onChange={this.updateBody}
                    >
                    </ReactQuill>
                </div>
            </section>
        )
    }

    updateBody = async (value) => {
        await this.setState({ text: value });
        this.update();
    }
    
    //update when the user stops typing for 2 sec
    update = debounce(()=>{
        console.log("Database is being updated");
        //axios post request here to send in the data
    }, 2000);
}

