import React, { useState, useContext } from 'react';
import MyContext from '../MyContext';

const Comment = (props)=> {
    const { avatars, userLoggedIn, commentDeleteBtnHandler } = useContext(MyContext);
        const avatar = avatars.filter((avatar)=>{
            return avatar.userId == props.comment.userId
        })

        return (
            <div className="comment">
                    <React.Fragment> 
                        <div><img className="commentAvatar" src={`${avatar[0].src}`} /></div>
                        <p>{props.comment.title}</p>
                        <p>{props.comment.body}</p>
                    </React.Fragment>
                {
                    (props.comment.userId*1 == userLoggedIn)?
                    <button className="deleteBtn" onClick={(event)=>{commentDeleteBtnHandler(event, props.comment.id, props.comment.userId, props.post.id)}}>❌</button>
                    :
                    ""
                }
            </div>
        )
}

export default Comment;