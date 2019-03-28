import React from "react";
import CommentWrapper from "../CommentSection/CommentWrapper";
import PropTypes from 'prop-types';

class IndividualPost extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: props.item,
      comments: props.commentSection,
      likes: props.likes,
      liked: props.likedOrNot,
 
    }
  }
  
  increaseLike = () => {
    let likes = this.state.likes + 1;
    this.setState( {likes} )

  }

  changeCommentForm = (event) => {

    console.log (event.target.value)
    this.setState({
      newComment: event.target.value
    })
  }

  // hideIcon = (id) => {
  //     this.state.setState({ 
  //       ...id,
  //       liked: true})
  //   console.log (this.state.liked)
  // }

  likeButtonClickFunction = () => {
    // this.hideIcon();
    this.increaseLike();

  }


  render() {
    return (
      <div className="postTopSection">
        <div className="upperThumbnailAndUsername">
          <div className="upperThumbnail">
            <img src={this.state.item.thumbnailUrl} alt='Username Thumbnail Profile'/>
          </div>
          <div className="upperUsername">{this.state.item.username}</div>
        </div>
        <div className="postMainPhoto">
          <img src={this.state.item.imageUrl} width="600" alt='Main Post'/>
        </div>
        <div className="postBottomSection">
          <div className="commentIconSection">
            <i className = {this.state.liked ? "fas fa-heart" : "far fa-heart"} onClick= {this.likeButtonClickFunction} ></i>
            {/* <i className = "fas fa-heart" onClick= {props.likeButtonBeingPressed}></i> */}

            <i className="far fa-comment"></i>
          </div>
          <div className="commentLikeSection">
            <div className="commentLikeData">{this.state.likes}</div>
            <div className="commentLikeText">likes</div>
          </div>
          <div>
            <CommentWrapper
            item = {this.state.item}
            comments = {this.state.comments}
            />
          </div>

        </div>
      </div>
    );
  }
};

IndividualPost.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
  })
}


export default IndividualPost;
