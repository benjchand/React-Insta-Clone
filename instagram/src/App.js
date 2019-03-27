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
        allDummyData: [],
        searchString: '',


      };
  
    };

  componentDidMount() {
    this.setState({allDummyData: dummyData})
  }

  changeSearchInput = (event) => {
    this.setState({
      searchString: event.target.value
    })
    console.log (this.state.searchString)
  }

  searchFunction = (event) => {
    event.preventDefault();
    console.log ('Button Has Been Pushed')
    // console.log (this.state.allDummyData)
    if(this.state.searchString !== '') {
      const newArray = dummyData.filter((postBeingExamined) => {
        return postBeingExamined.username == this.state.searchString;
      })
      this.setState({
        allDummyData: newArray
      })
      // return newArray;
    } else {
      this.setState({
      allDummyData: dummyData
    })}

  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
         <SearchBar  
         searchIconFunction = {this.searchFunction}
         informationBeingSearched = {this.state.searchString}
         changeSearchInput = {this.changeSearchInput}
         
         />
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
// 