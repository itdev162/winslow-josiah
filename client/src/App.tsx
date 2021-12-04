import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList/PostList";
import Post from "./components/Post/Post";
import './App.css';

class App extends React.Component {
  state = {
    posts: [],
    post: null
  }

  componentDidMount() {
    axios.get('http://localhost:5000/posts')
    .then((response) => {
      this.setState({
        posts: response.data
      });
    })
    .catch((error) => {
      console.error(`Error fetching data: ${error}`);
    })
  }

  viewPost = (post) => {
    console.log(`view ${post.title}`);
    this.setState({
      post: post
    });
  };

  render() {
    const { posts, post } = this.state;

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            BlogBox
          </header>
          <main className="App-content">
            <Routes>
              <Route path="/" element={
                <PostList posts={posts} clickPost={this.viewPost} />
              } />
              <Route path="/posts/:postId" element={
                <Post post={post} />
              } />
            </Routes>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
