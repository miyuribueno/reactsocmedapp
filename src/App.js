import React from 'react';
import './App.css';
import AddpostForm from './components/AddPostForm';
import Posts from './components/Posts';
import { cloneDeep, clone } from 'lodash';
import { uuid } from 'uuidv4';
import { Link, Route} from 'react-router-dom';
import avatar1 from './images/avatar1.png';
import avatar2 from './images/avatar2.png';
import MyContext from './MyContext';



class App extends React.Component {
  
  updatePost = (post)=> {
    this.setState({
      posts: post
    })
  }

  postBtnClickHandler = (p)=> {
    let newPost = {userId: this.state.userLoggedIn, id: uuid(), title: p, body: "", "comments": []}; 
    let posts = [...this.state.posts, newPost];
    this.updatePost(posts)
  }

  handleChange = (event)=> {
    this.setState({
      postTextAreaValue: event.target.value
    });
  }

  deleteBtnHandler = (event)=> {
    let posts = cloneDeep(this.state.posts);
    let newPost = posts.filter((post)=> {
      return event.target.id !== post.id
    })
    console.log(newPost)
    console.log(event.target.id)
    this.setState({
      posts: newPost
    })
  }

  commentDeleteBtnHandler = (event,commentId,userid,selectedPostId)=> {
    let copiedPost = cloneDeep(this.state.posts);
    let post = copiedPost.filter((post)=> {
      return post.id == selectedPostId
    }) 

    let newComment = post[0].comments.filter((comment)=>{
      return comment.id !== commentId
    })

    post[0].comments = newComment;

    console.log(post[0])
    console.log(copiedPost)
    this.setState({
      posts: copiedPost
    })
  }
  
  commentBtnHandler = (event, value,id)=> {
    let posts = cloneDeep(this.state.posts);
    let newComment = {
        id: uuid(),
        userId: this.state.userLoggedIn,
        title: "new comment",
        body: value
      }
    posts.map((post)=> {
      if(post.id == id) {
        post.comments.push(newComment)
      }
    })
    this.updatePost(posts)
  }
  
  state = {
    avatars: [
      { src: avatar1, userId: 1}, 
      { src: avatar2, userId: 2}, 
      { src: avatar1, userId: 3}, 
      { src: avatar2, userId: 4}, 
      { src: avatar1, userId: 5}
    ],
    posts: [{
      "userId": 1,
      "id": uuid(),
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "comments": []
    },
    {
      "userId": 2,
      "id": uuid(),
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      "comments": [
        {
          id: uuid(),
          userId: 3,
          title: "new comment user3",
          body: 'test comment'
        },
        {
          id: uuid(),
          userId: 2,
          title: "new comment user2",
          body: 'test comment'
          }

    ]
    },
    {
      "userId": 3,
      "id": uuid(),
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      "comments": [
        {
          id: uuid(),
          userId: 5,
          title: "new comment user5",
          body: 'test comment'
        },
        {
          id: uuid(),
          userId: 4,
          title: "new comment user4",
          body: 'test comment'
          }
      ]
    },
    {
      "userId": 4,
      "id": uuid(),
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      "comments": []
    },
    {
      "userId": 5,
      "id": uuid(),
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      "comments": []
    }],
    postBtnClickHandler: this.postBtnClickHandler,
    handleChange: this.handleChange,
    deleteBtnHandler: this.deleteBtnHandler,
    commentDeleteBtnHandler: this.commentDeleteBtnHandler,
    commentBtnHandler: this.commentBtnHandler,
    postTextAreaValue: "",
    userLoggedIn: 1
  };

  render() {

    return (
      <MyContext.Provider value={this.state}>
        <div className="App">
          <header className="App-header">
            <h1>Social Media App</h1>

            <Posts 
            // userLoggedIn={this.state.userLoggedIn}
            // posts={posts}  
            // deleteBtnHandler={this.deleteBtnHandler} 
            // commentBtnHandler={this.commentBtnHandler}
            // commentChangeHandler={this.commentChangeHandler}
            // commentDeleteBtnHandler={this.commentDeleteBtnHandler}
            // avatars={this.state.avatars}
            />

            <AddpostForm
              // value={this.state.postTextAreaValue}
              // handleChange={this.handleChange} 
              // postBtnClickHandler={this.postBtnClickHandler}
              // posts={posts}
            />
          </header>
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
