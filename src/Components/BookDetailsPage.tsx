import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../CSS/bookDetails.module.scss';

interface Book {
    title: string;
    author: string;
    cover_image_url: string;
    published_date: string;
    publisher: string;
    isbn: string;
}

interface RouteParams {
    id: string;
}

export const BookDetailsPage = () => {
    const [book, setBook] = useState<Book | null>(null)

    let { id } = useParams<RouteParams>();
    const idNum: number = +id;
    console.log(idNum);

    useEffect(() => {
        fetch(`http://localhost:3001/books/${idNum}`)
            .then(response => response.json())
            .then(json => setBook(json.book))
    }, [idNum])

    if(!book) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1 className="intro">{book.title}</h1>
        </div>
    )
}