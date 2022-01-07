import React, { useState } from 'react'

import User from './User';

import styles from './Users.module.css'

export default function Users(props) {
  const { author, text, replies } = props;
  const [showMainUser, setShowMainUser] = useState(true);

  const [showChildUsers, setShowChildUsers] = useState({});


  let arr = [];

  const handleClickMain = () => {
    setShowMainUser(!showMainUser);
  }

  const handleClickChildUser = (name) => {
    console.log(name, 'trigger');
    let obj = { ...showChildUsers };

    if (!showChildUsers[name]) {
      if (showChildUsers[name] === false) {
        obj[name] = true;
      } else {
        obj[name] = false
      }
    }
    setShowChildUsers(obj);
  }


  const handleResult = (result, idx) => {
    if ((result.replies || []).length === 0) {
      arr.push(
        <div key={idx + result.name}>
          <User author={result.author} text={result.text} idx={idx} />
        </div>
      );
      return arr;
    }
    else {
      arr.push(
        <div key={`${idx} + ${result.author.name}`} /* onClick={() => handleClickChildUser(result.author.name)} */>
          <User author={result.author} text={result.text} idx={idx} />
        </div>);
      return result.replies.map((reply, index) => handleResult(reply, (result.replies || []).length + index + idx));
    }
  }

  return (
    <div className={styles.userContainer}>
      <div className={styles.userImg} onClick={handleClickMain}>
        <img src={author.avatar} alt="avatar" />
      </div>
      {showMainUser && <div className={styles.userDetailsContainer}>
        <div className={styles.userName}>{author.name}</div>
        <div>{text}</div>
        {replies.map((reply, idx) => handleResult(reply, idx))}
      </div>}
    </div>
  )
}
