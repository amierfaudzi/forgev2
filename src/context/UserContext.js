import React, { Component, createContext } from 'react';

export const UserContext = createContext();

export default class UserContextProvider extends Component {

    state = {
        user: null,
    }

    handleAuth = (profile, logout=false) => {
        if(profile || logout){
            this.setState({
                user: profile
            })
        } 
        console.log("the user is ", this.state.user)
    }

    render() {
        return (
            <UserContext.Provider value={{...this.state, handleAuth: this.handleAuth }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

//nothing changed here, we still send in a state and also handle auth to reset tje state but call it userReducer
//context is to provide a 
