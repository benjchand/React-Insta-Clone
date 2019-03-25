import React from 'react';



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
        </div>
    )
}

export default IndividualPost