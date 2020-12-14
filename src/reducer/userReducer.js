import { SIGN_IN_USER, SIGN_UP_USER } from './types';

export const userReducer = (state, action) => {
    switch(action.type){
        case SIGN_IN_USER:
            return [...state, {
            }]
        case SIGN_UP_USER:
            return state.filter(todo => todo.id !== action.id)
        default: 
            return state
    }
}