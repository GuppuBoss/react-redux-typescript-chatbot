import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import usersChat from './usersChat';

const history = createBrowserHistory();

export default combineReducers({
  router: connectRouter( history ),
  usersChat
});
