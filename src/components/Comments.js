import React from 'react';
import Comment from '../components/Comment';

const Comments = (props)=> {
        const displayComments = props.comments.comments.map((comment)=>{
            return (
                <div className="commentDetails">
                    {/* <Comment avatars={props.avatars} post={props.comments} commentDeleteBtnHandler={props.commentDeleteBtnHandler} comment={comment} userLoggedIn={props.userLoggedIn} /> */}
                    <Comment post={props.comments} comment={comment}/>
                </div>
            )
          }) 

        return (
            <React.Fragment>
                {displayComments}
            </React.Fragment>
        )
    }

export default Comments;