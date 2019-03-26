import React from 'react';

const SearchBar = props => {
    return (
        <div className = 'searchBarWrapper'>
            <div className = 'searchBarInstagram'>
                <i class = "fab fa-instagram"></i>
                <img src = "../../img/Instagram_logo.png"/>


            </div>
            <div className = 'searchBarSearchWrapper'>
                <form className = 'searchBarSearchForm'>
                <input 
                    // value={props.value}
                    // onChange={props.changeToDoItemForm}
                    placeholder='Add a comment...'
                
                />
                



                {/* <button onClick={props.addToDoListForm}> Add Item</button>
                <button onClick={props.clearCompletedTasksForm}> Clear Completed</button> */}
        </form>
            </div>
            <div className = 'searchBarRightIcons'>
                <i class = "far fa-compass"></i>
                <i class = "far fa-heart"></i>
                <i class = "far fa-user"></i>

            </div>
        </div>
    )
}

export default SearchBar;