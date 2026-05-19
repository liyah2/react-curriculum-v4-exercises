import { useState } from 'react';
import './Lesson07Styles.css';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);

  function handleGetPost() {
    getSinglePost(1).then((data) => {
      setPost(data);
    });
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleGetPost}>
        Get post
      </button>
      <div className="content">
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        ) : (
          <>
            TODO: Replace me with detched data when the {''}
            <code>Get post</code> button is clicked
          </>
        )}
      </div>
    </div>
  );
}
