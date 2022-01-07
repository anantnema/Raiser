

import Users from './Users';

import { data } from '../data/posts';

import styles from './Posts.module.css';

export default function Posts() {

  const { author, text, replies } = data ?? {};

  return (
    <div className={styles.container}>
      <Users author={author} text={text} replies={replies} />
    </div>
  )
}
