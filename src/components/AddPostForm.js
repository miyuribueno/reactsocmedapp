import React, { useState, useContext } from 'react';
import MyContext from '../MyContext';

const AddpostForm = (props)=> {
    const {postBtnClickHandler} = useContext(MyContext);
    const [input, setInput] = useState('');

         return (
            <div id="addPostForm">
                <textarea 
                    placeholder="Write a post"
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                /> 
                <button 
                    id="postBtn"
                    onClick={()=>{postBtnClickHandler(input)}}
                >
                    Post
                </button>
            </div>
        )
}

export default AddpostForm;