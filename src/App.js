import {React, useState} from 'react';
import './styles/App.scss';
import {  PostForm, PostList } from './components';


const App = () =>
{
    const [posts, setPosts] = useState([
         {
            id: 1,
            title: "Title",
            description: "Description"
        },
         {
            id: 2,
            title: "Title",
            description: "Description"
        },
          {
            id: 3,
            title: "Title",
            description: "Description"
        },
           {
            id: 4,
            title: "Title",
            description: "Description"
        },
        
    ]);

    const createPost = (newPost) =>
    {
        setPosts([...posts, newPost])
    };

    const removePost = (post) =>
    {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    
    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList remove={removePost} title={'Посты о чем-то'} posts={posts} />
        </div>
    )
}

export default App;