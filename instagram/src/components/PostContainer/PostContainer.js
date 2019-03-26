import React from 'react';
import IndividualPost from './IndividualPost';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className = 'postContainerWrapper'>

            <div className = "postImageWrapper">
                {props.dummyDataArrayBeingReferenced.map(itemFromArrayBeingExamined => (
                    <IndividualPost 
                        key = {itemFromArrayBeingExamined.id}
                        item = {itemFromArrayBeingExamined}
                        commentSection = {itemFromArrayBeingExamined.comments}
                        likes = {itemFromArrayBeingExamined.likes}
                        timestamp = {itemFromArrayBeingExamined.timestamp}
                        
                    />
                ))}
            </div>

            {/* <div className = "postCommentWrapper">
                {props.commentDataArrayBeingReferenced.map(itemFromCommentArrayBeingExamined => (
                    <CommentSection
                        key = {itemFromCommentArrayBeingExamined.id}
                        item = {itemFromCommentArrayBeingExamined}
                        username = {itemFromCommentArrayBeingExamined.username}
                        text = {itemFromCommentArrayBeingExamined.text}
                    />
                ))}
            </div> */}

        </div>
    )
}

export default PostContainer