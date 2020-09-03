import React, { useState, useEffect } from 'react';
import styles from '../CSS/booksPage.module.scss';
import { useLocation } from 'react-router-dom';
import { SearchResults } from './SearchResults';

export interface Book {
    title: string;
    author: string
}

export const BooksPage = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [search, setSearch] = useState("");
    const [mode, setMode] = useState("Loading");

    useEffect(() => {
        setMode("Loading");
        fetch(`http://localhost:3001/books?search=${search}`)
            .then(response => response.json())
            .then(json => setBooks(json.books))
            .then(() => {setMode("Ready")})
    },[search])
    
    return (
        <section>
            <h1 className="intro">Books</h1>
            <div className="search">
                <input type="text" id="search" placeholder="Search..." value={search} onChange={ (event) => setSearch(event.target.value) } />
            </div>
            {mode === 'Ready' && <SearchResults books={books} />}
            {mode === 'Loading' && <p>Loading...</p>}
        </section>
    )
}

