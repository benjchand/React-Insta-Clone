import React from 'react';


const CommentForm = props => {
    return (
        <form className='add-comment-form'>
            <input 
                // value={props.value}
                // onChange={props.changeToDoItemForm}
                placeholder='Add a comment...'
            
            />
            



            {/* <button onClick={props.addToDoListForm}> Add Item</button>
            <button onClick={props.clearCompletedTasksForm}> Clear Completed</button> */}
        </form>
    )
}


export default CommentForm;