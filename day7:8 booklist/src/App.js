import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import INPUT from './components/INPUT.js';
import TABLE from './components/TABLE.js';

export default function App() {
  const [books, setBooks] = useState([]);

  function onBookCreated(book) {
    const newBooks = []; 
    newBooks.push(book);
    for (let b of books) {
      newBooks.push(b);
    }
    console.log(newBooks)
    setBooks(newBooks);
    console.log(books);
  }

  return (
    <div className='container-fluid p-5 bg-dark'>
      <div className='card card-body p-5'>
        <h1 className='fw-bold'>Add Book:</h1>
        <INPUT newBook={onBookCreated}></INPUT>
          {/* sends the function onBookCreated as a prop function called newBook to INPUT.js & TABLE.js */}
        <TABLE bookslist={books}></TABLE>
      </div>
    </div>
  )
}