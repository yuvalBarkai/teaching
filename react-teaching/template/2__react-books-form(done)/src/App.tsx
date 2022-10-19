import { useState } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import Book from './components/Book';
import bookList from './data/bookList';


function App() {
  const [books, setBooks] = useState({});

  const refresh = () => {
    setBooks({});
  }

  return (
    <div className="App">
      <h2>Book store</h2>
      <div className='bookView'>
        {bookList.map((b) => 
        <Book key={bookList.indexOf(b)} name={b.name} img ={b.img} author={b.author} price={b.price} />
        )}
      </div>
      <AddBook refreshBooks={refresh} />
    </div>
  );
}

export default App;