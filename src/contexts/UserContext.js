import React, { Component, createContext } from 'react';

export const UserContext = createContext();

export default class UserContextProvider extends Component {

    state = {
        user: null,
        userSkills: []
    }

    handleAuth = (profile, logout=false) => {
        if(profile || logout){
            this.setState({
                user: profile
            })
        } 
    }

    handleSkill = (skills) => {
        this.setState({
            userSkills: [...this.state.userSkills, ...skills]
        })
    }

    render() {
        return (
            <UserContext.Provider value={{...this.state, handleAuth: this.handleAuth, handleSkill: this.handleSkill }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
