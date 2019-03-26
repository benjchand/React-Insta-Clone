import React from 'react';
import PropTypes from 'prop-types';



const CommentSection = props => {

    return (
        <div className = 'commentContainerWrapper'>

            <div className = "commentIconWrapper">
            </div>

            <div className = "commentDataSection">
                <span className = "commentUserName">
                    {props.username}
                </span>
                    {props.text}
            </div>

        </div>
    )
}

CommentSection.propTypes ={
    text: PropTypes.string.isRequired,
    
}


export default CommentSection