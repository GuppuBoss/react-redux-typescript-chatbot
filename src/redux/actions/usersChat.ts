import moment from 'moment';
import axios from 'axios';
import { batch } from 'react-redux';

import {
    SET_USERS,
    IS_LOADING,
    UPDATE_USER_CHATS
} from '../types';
  import { 
    IChatUsers,
    IChatMessages
} from '../../interfaces';

const loadingUserChatAction = (loading: boolean) => ({
  type: IS_LOADING,
  payload: { loading }
});

export const setChatUsersAction = ( users: IChatUsers ) => ( {
  type: SET_USERS,
  payload: { 
    users,
    chats: [
      {
        type: 1,
        userName: users.userName1,
        message: `Welcome ${users.userName1}! How may i help you?`,
        createdAt: moment().format('DD/MM/YYYY, h:mm A')
      },
      {
        type: 2,
        userName: users.userName2,
        message: `Welcome ${users.userName2}! How may i help you?`,
        createdAt: moment().format('DD/MM/YYYY, h:mm A')
      },
  ]
  }
} );

const updateUsersChatAction = (chats: IChatMessages[]) => ({
  type: UPDATE_USER_CHATS,
  payload: { chats }
});

export const getAPIDataAsync = (userInput: string, users: IChatUsers) => {
  return async (dispatch: any ) => {
    try {
      dispatch(loadingUserChatAction(true));
      const randomId = Math.floor(Math.random() * 100);
      const { data } = await axios.get(`${process.env.REACT_APP_JSON_API_ENDPOINT}posts/${randomId}`);
      const newChats: IChatMessages[] = [
        {
          type: 1,
          userName: users.userName1,
          message: userInput,
          createdAt: moment().format('DD/MM/YYYY, h:mm A')
        },
        {
          type: 2,
          userName: users.userName2,
          message: data.title,
          createdAt: moment().format('DD/MM/YYYY, h:mm A')
        },
      ];
      debugger
      batch(() => {
        dispatch(loadingUserChatAction(false));
        dispatch(updateUsersChatAction(newChats))
      });
      return {
        chats: data
      };
    } catch (error) {
      console.error('getAPIDataAsync', error);
      dispatch(loadingUserChatAction(false));
      return error;

    }
  }
}