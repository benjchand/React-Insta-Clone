import React from 'react';



const CommentSection = props => {

    return (
        <div className = 'commentContainerWrapper'>

            <div className = "commentIconWrapper">
            </div>

            <div className = "commentDataSection">
                <div className = "commentUserName">
                    {props.username}
                </div>
                <div className = "commentText">
                    {props.text}
                </div>
            </div>

        </div>
    )
}

export default CommentSection