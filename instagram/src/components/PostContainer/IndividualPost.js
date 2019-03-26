import React from 'react';
import CommentSection from '../CommentSection/CommentSection';



const IndividualPost = props => {
    return (
        <div className = 'postTopSection'>
            <div className = 'upperThumbnailAndUsername'>
                <div className = "upperThumbnail">
                    <img src={props.item.thumbnailUrl}/>
                </div>
                <div className = "upperUsername">
                    {props.item.username}
                </div>
            </div>
            <div className = 'postMainPhoto'>
                <img src={props.item.imageUrl} width="600"/>
            </div>
            <div className= 'postBottomSection'>
                <div className= 'commentIconSection'>
                    <img src= 'https://cdn1.iconfinder.com/data/icons/ui-22/24/496-512.png' width='22' height='22'/>
                    <img src= 'https://cdn1.iconfinder.com/data/icons/ui-22/24/496-512.png' width='22' height='22'/>

                </div> 
                <div className= 'commentLikeSection'>
                    <div className= 'commentLikeData'>
                        {props.likes}
                    </div>
                    <div className= 'commentLikeText'>
                        likes
                    </div>
                </div> 
                {props.commentSection.map(itemBeingReferenced => (
                    <CommentSection
                        key = {itemBeingReferenced.id}
                        username = {itemBeingReferenced.username}
                        text = {itemBeingReferenced.text}

                    />
                ))}

            </div>

        </div>
    )
}

export default IndividualPost