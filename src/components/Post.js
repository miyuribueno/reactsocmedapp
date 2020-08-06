import React, { useState, useContext } from 'react';
import Comments from '../components/Comments';
import CommentInputBox from './CommentInputBox';
import MyContext from '../MyContext';

const Post = (props)=> {
    const {avatars, userLoggedIn, deleteBtnHandler} = useContext(MyContext);
    const [showComment, setShowcomment] = useState(false);
    
        const avatar = avatars.filter((avatar,i)=>{
            return avatar.userId == props.post.userId
        })

        return (
            <React.Fragment>
                <div className="postBox">
                    <div><img className="postAvatar" src={`${avatar[0].src}`} /></div>
                    <div className="postDetailsBox">
                        <p id="userId">UserID #{props.post.userId}</p>
                        <h2 className="postTitle">{props.post.title}</h2>
                    </div>
                    {   
                        (props.post.userId*1 == userLoggedIn)?
                        <button className="deleteBtn" id={props.post.id} onClick={deleteBtnHandler}>❌</button>
                        :
                        ""
                    }
                </div>
                <div className="commentBox">
                    {
                        (showComment == true)?
                            <React.Fragment>
                                <button className="toggleBtn" onClick={()=>{ setShowcomment(false) }}>{`Hide comments`}</button>
                                {/* <Comments avatars={props.avatars} commentDeleteBtnHandler={props.commentDeleteBtnHandler} comments={props.post} commentBtnHandler={props.commentBtnHandler} userLoggedIn={props.userLoggedIn}/> */}
                                <Comments comments={props.post} />
                            </React.Fragment>
                        :
                            <button className="toggleBtn" onClick={()=>{setShowcomment(true)}}>{`View all comments (${props.post.comments.length})`}</button>
                    }
                   
                </div>
                <div className="commentInputBox">
                    {/* <CommentInputBox  commentBtnHandler={commentBtnHandler} commentChangeHandler={props.commentChangeHandler} post={props.post} value={props.value}/> */}
                    <CommentInputBox post={props.post}/>
                </div>
            </React.Fragment>
        )
}

export default Post;