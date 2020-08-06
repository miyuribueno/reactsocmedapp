import React from 'react';
import { uuid } from 'uuidv4';
import MyContext from './MyContext';

class MyProvider extends React.Component {
    state = {
        sample: "hello world",
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
          }]
    }

    changeSampleValue = ()=> {
        this.setState({
            sample: "world hello"
        })
    }

    render() {
        return(
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider;