import React from 'react';
import PropTypes from 'prop-types';


class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: props.username,
            text: props.text,
            newUsername: 'Hardcoded Username',
            newComment: ''
        }
    }


    render(){
        return (
            <div className = 'commentContainerWrapper'>

                <div className = "commentIconWrapper">
                </div>

                <div className = "commentDataSection">
                    <span className = "commentUserName">
                        {this.state.username}
                    </span>
                        {this.state.text}
                </div>

            </div>
        )
    }
}

CommentSection.propTypes ={
    text: PropTypes.string.isRequired,

}


export default CommentSection