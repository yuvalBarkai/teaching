import { useState } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import Book from './components/Book';
import bookList from './data/bookList';

function App() {
  const [state, setState] = useState({});

  const callback = () => {
    setState({});
  }

  return (
    <div className="App">
      <div className='bookView'>
        {bookList.map(b => <Book name={b.name} author={b.author} price={b.price} />)}
      </div>
      <AddBook callback={callback} />
    </div>
  );
}

export default App;