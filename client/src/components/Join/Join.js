import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './Join.module.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
      <div>
        <h1>Join</h1>
        <div>
          <input
            type='text'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Room'
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type='submit'>Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
