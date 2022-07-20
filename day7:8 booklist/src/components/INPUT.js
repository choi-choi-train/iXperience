import React, {useState} from 'react';

class Book {
    constructor(a, b, c, d) {
        this.Id=a;
        this.Title=b;
        this.Author=c;
        this.ISBN=d;
    }
};

export default function INPUT(props) {
    const [bookTitle, setBookTitle] = useState('');
        // ties the setBookTitle setter function to modify bookTitle with whatever input it receives
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookISBN, setBookISBN] = useState('');
    
    function onFormSubmitted(event) {
        event.preventDefault();
        const book = new Book(
            (new Date()).getTime(),
            bookTitle,
            bookAuthor,
            bookISBN
        );
        props.newBook(book);
            // passes a book into the prop function from App.js, sends the new book object datapoint to App.js
        setBookTitle('');
        setBookAuthor('');
        setBookISBN('');
    }

    return (
        <div className="mt-3">
            <form onSubmit={onFormSubmitted}>
                <div className="mb-3">
                    <label className="form-label fw-bold">Title</label>
                    <input value = {bookTitle}
                        // creates 2-way-binding to enable changes to bookTitle to reflect on the input field
                        onChange={(event) => setBookTitle(event.target.value)}
                        // uses setBookTitle to set the value of bookTitle to event.target.value
                        type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Author</label>
                    <input value = {bookAuthor}
                        onChange={(event) => setBookAuthor(event.target.value)}
                        type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">ISBN#</label>
                    <input value = {bookISBN}
                        onChange={(event) => setBookISBN(event.target.value)}
                        type="text" className="form-control"/>
                </div>
                <button type="submit" 
                    className="btn btn-outline-dark custom">SUBMIT</button>
            </form>
        </div>
    )
}
