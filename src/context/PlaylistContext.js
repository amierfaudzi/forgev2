import React, { Component, createContext } from 'react';

export const PlaylistContext = createContext();

export default class PlaylistContextProvider extends Component {
    state = {
        searchedPlaylist: null,
        addedPlaylist: null
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

    render() {
        return (
            <PlaylistContext.Provider value={{...this.state, handleSearchPlaylist: this.handleSearchPlaylist, handleAddedPlaylist: this.handleAddedPlaylist}}>
                {this.props.children}
            </PlaylistContext.Provider>
        )
    }
}
