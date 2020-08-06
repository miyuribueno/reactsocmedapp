import React ,{ useContext } from 'react';
import Post from '../components/Post';
import MyContext from '../MyContext';

const Posts = (props)=> {
    let {posts} = useContext(MyContext);
        const displayPosts = posts.map((post)=>{
            return (
                <Post 
                    post={post}
                    // userLoggedIn={props.userLoggedIn}  
                    // deleteBtnHandler={props.deleteBtnHandler}
                    // commentBtnHandler={props.commentBtnHandler}
                    // commentChangeHandler={props.commentChangeHandler}
                    // value={props.value}
                    // commentDeleteBtnHandler={props.commentDeleteBtnHandler}
                    // avatars={props.avatars}
                />
            )
          }) 
        
        return (
        <React.Fragment>
            {displayPosts}
        </React.Fragment>
        )
}

export default Posts;