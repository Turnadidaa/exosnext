import React from 'react';
import posts from './posts.json';

const PostList = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>📰 Posts</h2>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
