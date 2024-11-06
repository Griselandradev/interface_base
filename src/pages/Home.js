import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <h1>Latest Posts</h1>
      <PostList posts={posts} />
      <Footer />
    </div>
  );
}

export default Home;