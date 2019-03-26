import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import CommentForm from "../CommentSection/CommentForm";

const IndividualPost = props => {
  return (
    <div className="postTopSection">
      <div className="upperThumbnailAndUsername">
        <div className="upperThumbnail">
          <img src={props.item.thumbnailUrl} />
        </div>
        <div className="upperUsername">{props.item.username}</div>
      </div>
      <div className="postMainPhoto">
        <img src={props.item.imageUrl} width="600" />
      </div>
      <div className="postBottomSection">
        <div className="commentIconSection">
          <i className = "far fa-heart"></i>
          <i class="far fa-comment"></i>
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

export default IndividualPost;
