import React, { createContext, useReducer } from 'react';
import { userReducer } from '../reducers/userReducer';

// Create a new context
export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
    // state that will be shared
    const [user, dispatch] = useReducer(userReducer, {} , ()=> {
            return { 
                name: "",
                authenticated: false,
                loading: false,
                token: ''
            };
        }
    );

    return (
        <ProfileContext.Provider value={{user, dispatch}} >
            { props.children }
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider; 