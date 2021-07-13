
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Component} from 'react';

import BookTable from './components/BookTable';
import AddBook from './components/AddBook';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  onBookCreated(book) {
    this.state.books.push(book);
    this.setState ({
      books: this.state.books
    });
  }

  render() {

  return (
    <div className="container card mt-4 p-4">
      <h1>Add Book:</h1>

      <AddBook addBook = {(book) => this.onBookCreated(book)}
      />

      <BookTable className = "bookTable" books = {this.state.books}/>
    
    </div>

    );
  }
}

export default App;
