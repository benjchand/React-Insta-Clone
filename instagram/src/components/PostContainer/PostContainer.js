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
                    />
                ))}
            </div>

            <div className = "postCommentWrapper">
                {props.commentDataArrayBeingReferenced.map(itemFromArrayBeingExamined => (
                    <CommentSection
                        key = {itemFromArrayBeingExamined.comments.id}
                        item = {itemFromArrayBeingExamined}
                        username = {itemFromArrayBeingExamined.username}
                        text = {itemFromArrayBeingExamined.text}
                    />
                ))}
            </div>

        </div>
    )
}

export default PostContainer