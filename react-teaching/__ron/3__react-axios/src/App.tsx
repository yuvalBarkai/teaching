import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoView from './components/PhotoView';

function App() {
    return (
        <div className="App">
            <h1>photos</h1>
            <div className='photos'>
                <PhotoView />
            </div>
        </div>
    );
}

export default App;
