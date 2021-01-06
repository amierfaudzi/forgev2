import axios from 'axios';
import React, { useState, useContext } from 'react';
import { PlaylistContext } from '../../context/PlaylistContext';
import List from '../List/List';
import './Search.scss'

export default function Search() {

    const { searchedPlaylist, handleSearchPlaylist } =useContext(PlaylistContext);
    const token = localStorage.FBIdToken;

    const handleSearch = (event) => {
        event.preventDefault();
        const query = event.target.searchInput.value;
        
        axios({
            method: 'get',
            url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=playlist&order=viewCount&relevanceLanguage=en&maxResults=25&q=${query}&key=${process.env.REACT_APP_API_KEY}`,
            transformRequest: (data, headers) => {
                delete headers.common['Authorization'];
            }
        })
        .then(res=>{
            handleSearchPlaylist(res.data.items);
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" name="searchInput" id="" placeholder="what do you want to learn"/>
                <button type="submit">Search</button>
            </form>

            <div className="search__results">
                {searchedPlaylist ? 
                <List list={searchedPlaylist}/> : "Start searching your video now"}
            </div>
        </div>


        
    )
}