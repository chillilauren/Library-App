import React, { useState, useEffect } from 'react';
import { SearchResults } from './SearchResults';

export interface Book {
    title: string;
    author: string;
    id: number
}

export const BooksPage = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [search, setSearch] = useState("");
    const [mode, setMode] = useState("Loading");
    const [nextPage, setNextPage] = useState(2)

    const loadMoreBooks = () => {
        fetch(`http://localhost:3001/books?search=${search}&page=${nextPage}`)
            .then(response => response.json())
            .then(json => setBooks(books.concat(json.books)))
        setNextPage(nextPage + 1);
    }

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
            {mode === 'Ready' && <SearchResults books={books} loadMore={loadMoreBooks} />}
            {mode === 'Loading' && <p className="loading">Loading...</p>}
        </section>
    )
}

