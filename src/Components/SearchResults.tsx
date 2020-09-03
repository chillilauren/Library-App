import React from 'react';
import { Book } from './BooksPage';
import styles from '../CSS/searchResults.module.scss';
import { Link } from 'react-router-dom';


interface SearchResultProps {
    books: Book[];
    loadMore: () => void;
}

interface BookProps {
    book: Book;
}

const BookListItem = ({book}:BookProps) => {
    return <li><Link className={styles.bookItem} to={`/books/${book.id}`}>{book.title} - {book.author}</Link></li>
}

export const SearchResults = ({books, loadMore}:SearchResultProps) => {
    const bookList = books.map((book) => {
        return <BookListItem book={book} />
    })

    if(books.length === 0) {
        return <div>There are no search results.</div>
    }

    return (
        <section>
            <div className={styles.booksList}>
                <ul>
                    {bookList}
                </ul>
            </div>
            <div className="btn-container">
                <button className="btn" onClick={loadMore}>Load more</button>
                <button className="btn">
                    <Link className="add-btn" to="/books/add">Add new book</Link>
                </button>
                
                
            </div>
        </section>
    )
}