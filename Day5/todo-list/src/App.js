
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import firebase from './fireBase/firebase';

import './App.css';
import {Component} from 'react';

import BookTable from './components/BookTable';
import AddBook from './components/AddBook';
import Book from './models/Book';

class App extends Component {

  constructor(props) {
    super(props);
    this.db = firebase.firestore();
    //let bookString = localStorage.getItem('books');
    //bookString = bookString ? bookString :'[]'
    //const books = JSON.parse(bookString);
    
    this.state = { books : []};
  }

  componentDidMount() {
    this.fetchBooks();
  
  }

  async fetchBooks() {
    try {
      const snapshot = await this.db.collection('books').get(); 
      const books = snapshot.docs.map(doc => Book.fromDocument(doc));
      console.log(books);
      this.setState({books: books});

    } catch (error) {
      console.log(error);
    }
  }


  //saveBookState(books) {
  //  this.setState ({books: books });
  //  localStorage.setItem('books', JSON.stringify(books));
  // }
 
 async onBookCreated(book) {

  try {
    console.log(book);
    const docRef = this.db.collection('books').doc();
    await docRef.set ({
      title : book.title,
      author : book.author,
      isbn : book.isbn
    });

    book.id = docRef.id;
    this.state.books.push(book);
    this.setState({books: this.state.books});
    //console.log(docRef.id);
  } catch (error) {
    console.log(error);
    
  }
    //this.state.books.push(book);
    //this.saveBookState (this.state.books);
  }

  async updateBook(book) {

    try {
      await this.db.collection('books').doc(book.id).update({
        title : book.title,
        author : book.author,
        isbn : book.isbn
      });
    
    const updatedBookArr = this.state.books.map( b => b.id === book.id? book : b);
    this.setState({books: updatedBookArr});
      
    } catch (error) {
      console.log(error)
    }
  }

  async removeBook(bookId) {
    try {
      await this.db.collection('books').doc(bookId).delete();
      const updatedBookArr = this.state.books.filter(book => book.id !==bookId);
      this.setState({ books: updatedBookArr});
      
      
    } catch (error) {
      console.log(error);
    }
  }

  render() {

  return (
    <div className="container card mt-4 p-4">
      <h1>Add Book:</h1>

      <AddBook 
      addBook = {(book) => this.onBookCreated(book)}
      />

      <BookTable className = "bookTable" 
                books = {this.state.books}

                updateBook={(book) => this.updateBook(book)} 
                removeBook={(bookId) => this.removeBook(bookId)}
      />
    
    </div>

    );
  }
}

export default App;
