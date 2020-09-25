import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import style from './Messages.module.css';

import Message from '../Message/Message';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className={style.messagesContainer}>
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
