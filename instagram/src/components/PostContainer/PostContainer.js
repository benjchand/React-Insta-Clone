import React from 'react';
import IndividualPost from './IndividualPost';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className = 'postContainerWrapper'>

            <div className = "postImageWrapper">
                {props.dummyDataArrayBeingReferenced.map(itemFromArrayBeingExamined => (
                    <IndividualPost 
                        item = {itemFromArrayBeingExamined}
                        key = {itemFromArrayBeingExamined.id}
                        commentSection = {itemFromArrayBeingExamined.comments}
                        likes = {itemFromArrayBeingExamined.likes}
                        likedOrNot = {itemFromArrayBeingExamined.liked}
                        timestamp = {itemFromArrayBeingExamined.timestamp}
                        
                        
                    />
                ))}
            </div>

        </div>
    )
}

PostContainer.propTypes = {
    dummyDataArrayBeingReferenced: PropTypes.arrayOf(PropTypes.object)
};



export default PostContainer