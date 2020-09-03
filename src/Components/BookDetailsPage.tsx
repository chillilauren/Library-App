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
        <section className={styles.bookDetails}>
            <div>
                <h1 className={styles.title}>{book.title}</h1>
                <p className={styles.author}>{book.author}</p>
            </div>
            <div>
                <div className={styles.details}>
                    <p>Publisher:<br></br>
                    <span>{book.publisher}</span>
                    </p>

                    <p>Publish Date:<br></br>
                    <span>{book.published_date}</span>
                    </p>

                    <p>ISBN:<br></br>
                    <span>{book.isbn}</span>
                    </p>
                </div>
                <img src={book.cover_image_url} alt="Cover Image"/>
            </div>
            <div className={styles.copies}>
                <h3>Copies:</h3>
            </div>
            
        </section>
    )
}