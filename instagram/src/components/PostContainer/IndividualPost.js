import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import CommentForm from "../CommentSection/CommentForm";
import PropTypes from 'prop-types';

const IndividualPost = props => {
  return (
    <div className="postTopSection">
      <div className="upperThumbnailAndUsername">
        <div className="upperThumbnail">
          <img src={props.item.thumbnailUrl} alt='Username Thumbnail Profile Picture'/>
        </div>
        <div className="upperUsername">{props.item.username}</div>
      </div>
      <div className="postMainPhoto">
        <img src={props.item.imageUrl} width="600" alt='Main Post Image'/>
      </div>
      <div className="postBottomSection">
        <div className="commentIconSection">
          <i className = "far fa-heart"></i>
          <i className="far fa-comment"></i>
        </div>
        <div className="commentLikeSection">
          <div className="commentLikeData">{props.likes}</div>
          <div className="commentLikeText">likes</div>
        </div>
        {props.commentSection.map(itemBeingReferenced => (
          <CommentSection
            key={itemBeingReferenced.id}
            username={itemBeingReferenced.username}
            text={itemBeingReferenced.text}
          />
        ))}
        <div className="timestampData">{props.timestamp}</div>
        <div className="addCommentForm">
          <CommentForm 
          
          />
        </div>
      </div>
    </div>
  );
};

IndividualPost.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
  })
}


export default IndividualPost;
