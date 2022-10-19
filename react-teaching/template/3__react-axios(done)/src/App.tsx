import './App.css';
import PhotoView from './components/PhotoView';

function App() {
    return (
        <div className="App">
            <h1>Photos</h1>
            <div className='Photos'>
                <PhotoView />
            </div>
        </div>
    );
}

export default App;