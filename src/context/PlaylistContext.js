import React, { Component, createContext } from 'react';

export const PlaylistContext = createContext();

export default class PlaylistContextProvider extends Component {
    state = {
        searchedPlaylist: null,
        addedPlaylist: null,
        currentVideo: null,
        activePlaylist: null
    }

    handleSearchPlaylist = (playlist) => {
        this.setState({
            searchedPlaylist: playlist
        })
        console.log(playlist)
    }

    handleAddedPlaylist = (playlist) => {
        this.setState({
            addedPlaylist: playlist
        })
        console.log(this.state)
    }

    handleActivePlaylist = (playlist) => {
        this.setState({
            activePlaylist: playlist
        })
    }

    handleCurrentVideo = (video) => {
        this.setState({
            currentVideo: video
            //add position here
        })
    }

    render() {
        return (
            <PlaylistContext.Provider value={{...this.state, 
            handleSearchPlaylist: this.handleSearchPlaylist, 
            handleAddedPlaylist: this.handleAddedPlaylist,
            handleActivePlaylist: this.handleActivePlaylist,
            handleCurrentVideo: this.handleCurrentVideo}}>
                {this.props.children}
            </PlaylistContext.Provider>
        )
    }
}
