import React, { Component } from 'react';
import './App.css';
import './components/PostContainer/PostContainer.css';
import './components/SearchBar/SearchBar.css';
import './components/CommentSection/CommentSection.css';


import PostsPage from './components/PostContainer/PostsPage';
import authentication from './components/Authentication/authenticate';
import LoginPage from './components/Authentication/Login';

const ComponentFromWithAuthenticate = authentication(PostsPage)(LoginPage)


class App extends Component {
  
    constructor(){
      super();
      this.state = {
      };
    };





  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />

      </div>
    );
  }
}

export default App;
// 