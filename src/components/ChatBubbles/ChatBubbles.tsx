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

import {getAPIDataAsync } from '../../redux/actions';
import { IChatMessages, IChatUsers } from '../../interfaces';

export const ChatBubbles: React.FC<any> = ({chats}: any) => {
  return (
    <ul className="chat">
    {
      chats.map((chat: IChatMessages) => {
        if(chat.type === 2) {
          return (<li className="agent clearfix text-left float-left">
          <span className="chat-img d-inline-block float-left clearfix mx-2">
              <img src={`${process.env.REACT_APP_PLACEHOLD_IMAGE_1}${chat.userName.substr(0,2).toUpperCase()}`} alt="Agent" className="rounded-circle" />
          </span>
          <div className="chat-body clearfix bg-success text-white">
            <div className="header clearfix">
              <strong className="text-white">{chat.userName}</strong> 
              <small className="float-right text-white">
                <span className="glyphicon glyphicon-time"></span>{chat.createdAt}
              </small>
            </div>
            <p>
                {chat.message}
            </p>
          </div>
      </li>)
        } else {
          return(
      <li className="admin clearfix text-right float-right">
          <span className="chat-img d-inline-block float-right clearfix  mx-2">
              <img src={`${process.env.REACT_APP_PLACEHOLD_IMAGE_2}${chat.userName.substr(0,2).toUpperCase()}`} alt="Admin" className="rounded-circle" />
          </span>
          <div className="bg-light chat-body clearfix">
              <div className="header clearfix">
                  <small className="float-left text-muted"><span className="glyphicon glyphicon-time"></span>{chat.createdAt}</small>
                  <strong className="float-right text-primary">{chat.userName}</strong>
              </div>
              <p className="text-left">
              {chat.message}
              </p>
          </div>
      </li>)
        }
      })
    }
      
  </ul>
  );
}
