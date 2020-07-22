import React, {Component} from 'react';
import {Form} from "./components/Form/Form";
import Post from "./components/Post/Post";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [
                {id: 0, title: 'Announcement', text: 'asdas', name: 'rty', date: new Date()},
                {id: 1, title: 'Second', text: 'asdasdd', name: 'qwe', date: new Date()}
            ]

        }
    };

    addPost = (post) => {
        this.setState(state => {
            const {posts} = state;
            posts.push({
                id: posts.length !== 0 ? post.length : 0,
                title: post.title,
                name: post.name,
                text: post.text,
                date: new Date(),

            })
            return posts;
        })
    }

    deletePost = (id) => {
        const index = this.state.posts.map(post => post.id).indexOf(id);
        this.setState(state => {
            let {posts} = state;
            delete posts[index];
            return posts;
        });
    }

    render() {
        const {posts} = this.state;
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col ">

                    </div>
                    <div className="col-6 ">
                        <Form addPost={this.addPost}/>
                        <div className="flex-column">


                            {
                                posts.map((post) => (
                                        <Post
                                            deletePost={() => this.deletePost(post.id)}
                                            post={post}
                                            key={post.id}
                                        />
                                    )
                                )
                            }

                        </div>

                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        )
    }

}


export default App;
