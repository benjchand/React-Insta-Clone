import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from "../CommentSection/CommentForm";
import CommentSection from "../CommentSection/CommentSection";




class CommentWrapper extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: props.item,
            comments: props.comments,
            username: props.username,
            text: props.text,
            newUsername: 'Hardcoded Username',
            newComment: ''
        }
    }
    changeCommentForm = event => {
        this.setState({ 
            newComment: event.target.value 
        });
      
    }

    addNewComment = (event) => {
        event.preventDefault();
        const placeHolderComment = {id: Date.now(), username: this.state.newUsername, text: this.state.newComment};
        if(placeHolderComment.text !== ""){
            this.setState({
            comments: [...this.state.comments, placeHolderComment],
            newComment: ''
            })
        }
    }

    render(){
        return (
            <div >

        {this.state.comments.map(itemBeingReferenced => (
            <CommentSection
              key={itemBeingReferenced.id}
              username={itemBeingReferenced.username}
              text={itemBeingReferenced.text}
 
            />
          ))}
          <div className="timestampData">{this.state.item.timestamp}</div>
          <div className="addCommentForm">
            <CommentForm 
              value = {this.state.newComment}
              changeCommentForm = {this.changeCommentForm}
              addToCommentArray = {this.addNewComment}
            
            />
          </div>

            </div>
        )
    }
}

CommentWrapper.propTypes ={
    text: PropTypes.string,

}


export default CommentWrapper