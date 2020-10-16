import React, { useState } from 'react';
import { 
  Col,
  Form,
  Button,
  InputGroup,
  Row,
  Card
} from 'react-bootstrap';
import {
    useSelector,
    useDispatch
  } from 'react-redux'

import { ChatBubbles } from '../index';
import {getAPIDataAsync } from '../../redux/actions';
import { IChatMessages, IChatUsers } from '../../interfaces';
import './ChatRoom.scss';

export const ChatRoom = () => {
  const [userText, setUserText] = useState<string>('');
  const Dispatch = useDispatch();
  const { users, chats }: {users: IChatUsers, chats: IChatMessages[]} = useSelector(({usersChat}: any) => ({
    users: usersChat.users,
    chats: usersChat.chats
  }));

  const _submitUserText = (event: React.SyntheticEvent) => {
    Dispatch(getAPIDataAsync(userText, users));
  }

  return (
  <Row className="justify-content-md-center">
        <Col sm={6}>
            <Card>
              <Card.Header className="text-center">
                <span>Chat Box</span>
              </Card.Header>
                <Card.Body className="chat-care">
                  <ChatBubbles chats={chats} />
                </Card.Body>
                <Card.Footer>
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control input-sm" 
                      placeholder="Type your message here..." 
                      onChange={(event) => setUserText(event.target.value)}
                    />
                    <span className="input-group-btn">
                      <Button variant="primary" onClick={_submitUserText}>
                        Send
                      </Button>
                    </span>
                  </div>
                </Card.Footer>
            </Card>
        </Col>
    </Row>
  );
}
