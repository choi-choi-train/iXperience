import React from 'react'

export default function TABLE(props) {
    console.log(props);

    return (
        <div className='mt-5'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.bookslist.map((book) => 
                    <tr key={book.Id}>
                        <td>{book.Title}</td>
                        <td>{book.Author}</td>
                        <td>{book.ISBN}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}
