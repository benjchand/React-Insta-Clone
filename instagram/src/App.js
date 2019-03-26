import React, { Component } from 'react';
import './App.css';
import './components/PostContainer/PostContainer.css';
import './components/SearchBar/SearchBar.css';
import './components/CommentSection/CommentSection.css';


import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'



class App extends Component {
  
    constructor(){
      super();
  
      this.state = {
        allDummyData: dummyData,
        formString: ''
      };
  
    };
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <SearchBar/>
        </header>
        <div className="App-body">
          <PostContainer 
          dummyDataArrayBeingReferenced = {this.state.allDummyData}
          // commentDataArrayBeingReferenced ={this.state.commentSectionData}
          
          />

        </div>
      </div>
    );
  }
}

export default App;
