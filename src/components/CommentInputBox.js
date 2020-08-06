import React, { useState, useContext } from 'react';
import MyContext from '../MyContext';


const CommentInputBox = (props)=> {
    const {commentBtnHandler} = useContext(MyContext);
    const [commentTextAreaValue, setcommentTextAreaValue] = useState("");

    const commentChangeHandler = (event)=> {
        setcommentTextAreaValue(event.target.value)
      }

        return (
            <React.Fragment>
                    <textarea className="commentInput"
                        value={commentTextAreaValue} 
                        onChange={commentChangeHandler}
                        placeholder="Write a comment"
                    /> 
                    <button 
                        className="commentBtn"
                        id={props.post.userId}
                        onClick={(event)=> {commentBtnHandler(event, commentTextAreaValue, props.post.id)}}
                    >
                        Comment
                    </button>
            </React.Fragment> 
        )
}

export default CommentInputBox;