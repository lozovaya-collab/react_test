import {React, useState} from 'react';
import './styles/App.scss';
import {  PostList } from './components';


const App = () =>
{
    const [posts] = useState([
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

    return (
        <div className="App">
            <PostList title={'Посты о чем-то'} posts={posts} />
        </div>
    )
}

export default App;