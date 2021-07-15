
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import {Component} from 'react';

import BookTable from './components/BookTable';
import AddBook from './components/AddBook';

class App extends Component {

  constructor(props) {
    super(props);

    let bookString = localStorage.getItem('books');
    bookString = bookString ? bookString :'[]'
    const books = JSON.parse(bookString);
    this.state = { books : books};
  }

  saveBookState(books) {
    this.setState ({books: books });

    localStorage.setItem('books', JSON.stringify(books));
    
  }
  onBookCreated(book) {
    this.state.books.push(book);
    this.saveBookState (this.state.books);
  }

  updateBook(book) {

    const updatedTaskArr = this.state.books.map( b => b.id === book.id? book : b);
    this.saveBookState(updatedTaskArr);
  }

  removeBook(bookId) {

    const updatedTaskArr = this.state.books.filter(book => book.id !==bookId);
    this.saveBookState(updatedTaskArr)
    
  }

  render() {

  return (
    <div className="container card mt-4 p-4">
      <h1>Add Book:</h1>

      <AddBook addBook = {(book) => this.onBookCreated(book)}
      />

      <BookTable className = "bookTable" books = {this.state.books}

                updateBook={(book) => this.updateBook(book)} 
                removeBook={(bookId) => this.removeBook(bookId)}
      />
    
    </div>

    );
  }
}

export default App;
