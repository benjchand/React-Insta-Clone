import React from 'react';



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

export default CommentSection