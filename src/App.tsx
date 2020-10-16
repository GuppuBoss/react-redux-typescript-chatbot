import React from 'react';
import { 
  Container,
  Row,
  Col
} from 'react-bootstrap';
import {
  useSelector,
} from "react-redux"

import './App.scss';
import { 
  ChatForm,
  ChatRoom
 } from './components'

function App() {
  const { users } = useSelector(({usersChat}: any) => ({
    users: usersChat.users
  }));

  return (
    <Container>
      <ChatForm />
      { !!users && <ChatRoom /> }
    </Container>
  );
}

export default App;
