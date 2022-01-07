import React, { memo } from 'react'

import styles from './User.module.css';

function User(props) {
  const { author, text, idx } = props;
  return (
    <div className={styles.userContainer} style={{ marginLeft: `${idx * 20}px` }}>
      <div className={styles.userImg}>
        <img src={author.avatar} alt="avatar" />
      </div>
      <div className={styles.userDetailsContainer}>
        <div className={styles.userName}>{author.name}</div>
        <div>{text}</div>
      </div>
    </div>
  )
}

export default memo(User);
