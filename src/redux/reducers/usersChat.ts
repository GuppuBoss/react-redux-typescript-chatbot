import { debug } from 'console';
import {
    SET_USERS,
    IS_LOADING,
    UPDATE_USER_CHATS
  } from '../types';
  
  const initialState = {
    isLoading: false,
    chats: [],
    users: null
  };
  
  export default ( state = initialState, action: any ) => {
    switch ( action.type ) {
      case IS_LOADING:
        return {
          ...state, 
          isLoading: action.payload.loading
        }
      case SET_USERS:
        return {
          ...state,
          users: action.payload.users,
          chats: action.payload.chats
        }
      case UPDATE_USER_CHATS: 
        return {
          ...state,
          chats: [...state.chats, ...action.payload.chats]
        }
      default:
        return state
    }
  }