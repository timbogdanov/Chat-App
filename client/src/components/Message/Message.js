import React from 'react';
import ReactEmoji from 'react-emoji';

import style from './Message.module.css';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className={style.sentByUser}>
      <div>
        <p className={style.senderName}>{trimmedName}</p>
        <div className={style.textMessage}>
          <p>{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className={style.notSentByUser}>
      <div>
        <p className={style.senderName}>{user}</p>
        <div>
          <p className={style.textMessage}>{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
