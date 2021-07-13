import React, { Component } from 'react'
import Book from '../models/Book';

export default class AddBook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            isbn: ''
        };
    }

    onAddBook() {
        const book = new Book(this.state.title, this.state.author, this.state.isbn);
        this.props.addBook(book);
        this.setState({title: '', author: '', isbn: ''})
    }

    render() {
        return (
            <div>
               <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Title</label>
                <input 
                    value = {this.state.title}
                    onChange = {(e) => this.setState({ title: e.target.value})}
                    type="email" className="form-control" />
                </div>

                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Author</label>
                <input 
                    value = {this.state.author}
                    onChange = {(e) => this.setState({ author: e.target.value})}
                    type="email" className="form-control" />
                </div>

                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">ISBN#</label>
                <input 
                    value = {this.state.isbn}
                    onChange = {(e) => this.setState({ isbn: e.target.value})}
                    type="email" className="form-control" />
                </div>

                <div className="d-grid gap-2">
                    <button onClick= {() => {this.onAddBook()}}
                    className="btn btn-light" 
                    type="button">Submit</button>
                </div>
            </div>
        )
    }
}
