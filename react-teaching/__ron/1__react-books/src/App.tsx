import './App.css';
import Book from './components/Book';
import Mossad from './components/Mossad';
import Sherlock from './components/Sherlock';
import bookList from './data/bookList';

function App() {

  return (
    <div className="App">
      <div className='bookView'>
        {bookList.map((b) => <Book name={b.name} author={b.author} price={b.price} />)}
      </div>
    </div>
  );
}

export default App;