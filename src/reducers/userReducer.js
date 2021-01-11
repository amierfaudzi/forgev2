import { SET_USER, LOG_OUT, SET_LOADING, SET_TOKEN } from './types';

export const userReducer = (state, action) => {
    switch(action.type){
        case SET_USER: 
            return {
                ...state,
                name: action.name,
                authenticated: true,
                loading: false
            };
        case LOG_OUT:
            return {
                name: '',
                authenticated: false,
                loading: false,
                token: ''
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: !action.loading
            }
        case SET_TOKEN: 
        return {
            ...state,
            token: action.token
        }
        default: 
            return state
    }
}