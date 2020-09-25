import React from 'react';

import style from './InfoBar.module.css';

const InfoBar = ({ room }) => (
  <div className={style.infoBarContainer}>
    <div className={style.roomInfo}>
      <span className={style.onlineDot}></span>
      <h3>{room}</h3>
    </div>
    <div>
      <a href='/' className={style.leaveRoom}>
        &#8592; Leave Room
      </a>
    </div>
  </div>
);

export default InfoBar;
