import React from 'react';

import style from './Input.module.css';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div className={style.inputContainer}>
      <form>
        <input
          type='text'
          placeholder='Type a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
        />
        <button
          onClick={(e) => sendMessage(e)}
          style={
            message
              ? { backgroundColor: '#0078FF', color: 'white' }
              : { backgroundColor: '#EEEEEE' }
          }
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Input;
