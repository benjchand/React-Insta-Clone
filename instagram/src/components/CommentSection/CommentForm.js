import React from 'react';


const CommentForm = props => {
    return (
        <form className='add-comment-form'>
            <input 
                value={props.value}
                onChange={props.changeCommentForm}
                placeholder='Add a comment...'
            
            />
            



            <button onClick={props.addToCommentArray}> <i className="fas fa-ellipsis-h"></i></button>
            {/* <button onClick={props.clearCompletedTasksForm}> Clear Completed</button> */}
        </form>
    )
}


export default CommentForm;