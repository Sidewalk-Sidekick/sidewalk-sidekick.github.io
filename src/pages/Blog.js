import { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    document.title = 'Blog';
  });
  return <h1>Blog</h1>;
};

export default Blog;
