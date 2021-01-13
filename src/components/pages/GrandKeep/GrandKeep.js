import axios from 'axios';
import React, { useEffect } from 'react';
import './GrandKeep.scss';


export default function GrandKeep() {

    useEffect(() => {
        
        axios.get('/grandkeep').then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    })
    return (
        <div>
            This is the grand keep
        </div>
    )
}
