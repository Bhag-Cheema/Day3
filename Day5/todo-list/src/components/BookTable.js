import React, { Component } from 'react'

export default class BookTable extends Component {
    render() {
        return (
            <div>
               <table className="table">
                <thead>
                    <tr>
                        <th> Title</th>
                        <th> Author</th>
                        <th> ISBN#</th>
                        <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                        this.props.books.map(book => {
                            return <tr key={book.id}>
                            <th> {book.title}</th>
                            <td> {book.author}</td>
                            <td> {book.isbn}</td>
                            <td><div className="trash"
                    onClick={() => this.props.removeBook(book.id)}>
                      <u>X</u>
                    </div>
                    </td>
                            </tr>
                        })
                    }
                    </tbody>
                 </table>
            </div>
        )
    }
}
