import React, { useState, useEffect } from 'react';
import { Book } from './BooksPage';
import styles from '../CSS/booksPage.module.scss';


interface SearchResultProps {
    books: Book[]
}

interface BookProps {
    book: Book
}

const BookListItem = ({book}:BookProps) => {
    return <li>{book.title} - {book.author}</li>
}

export const SearchResults = ({books}:SearchResultProps) => {
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
            <button className="more">Load More</button>
        </section>
    )
}