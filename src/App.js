import React from 'react';
import './styles/App.scss';
import { PostItem } from './components';


const App = () => {
    return (
        <div className="App">
            <PostItem number={1 } title={'Js'} description={'Description'} />
        </div>
    )
}

export default App;