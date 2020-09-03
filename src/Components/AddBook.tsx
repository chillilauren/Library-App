import React, { useState, useEffect, FormEvent } from 'react';
import styles from '../CSS/addBook.module.scss';
import { useHistory } from 'react-router-dom';

export const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [publishDate, setPublishDate] = useState("");
    const [isbn, setIsbn] = useState("");
    const [image, setImage] = useState("");
    const history = useHistory();

    const submitForm = (event:FormEvent) => {
        event.preventDefault();
        const data = {
            title: title,
            author: author,
            publisher: publisher,
            publish_date: publishDate,
            isbn: isbn,
            image_url: image
        }
        fetch("http://localhost:3001/books/new", {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }     
        })
        .then (() => history.push("/books"))
    }

    const getByIsbn = (event:FormEvent) => {
        event.preventDefault();
        fetch(`http://localhost:3001/books/by-isbn/${isbn}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setTitle(json.title);
                setAuthor(json.author);
                setPublisher(json.publisher);
                setPublishDate(json.publishDate);
                setImage(json.coverImageUrl);
            })
    }


    return (
        <section>
            <h1 className="intro">Add Book</h1>
            <form className={styles.form} onSubmit={getByIsbn} >
            <p>Lookup by ISBN</p>
                <label>
                    ISBN<br></br>
                    <input type="text" name="isbn" value={isbn} onChange={event => setIsbn(event.target.value)} />
                </label>
                <button className={`btn ${styles.search}`} >Search</button>
            </form>
            <form className={styles.form} onSubmit={submitForm} >
                <p>Or enter manually</p>
                <label>
                    Title<br></br>
                    <input type="text" name="title" value={title} onChange={event => setTitle(event.target.value)} />
                </label>
                <label>
                    Author<br></br>
                    <input type="text" name="author" value={author} onChange={event => setAuthor(event.target.value)} />
                </label>
                <label>
                    Publisher<br></br>
                    <input type="text" name="publisher" value={publisher} onChange={event => setPublisher(event.target.value)} />
                </label>
                <label>
                    Publish Date<br></br>
                    <input type="text" name="publish_date" value={publishDate} onChange={event => setPublishDate(event.target.value)} />
                </label>
                <label>
                    Cover Image URL<br></br>
                    <input type="text" name="cover_image_url" value={image} onChange={event => setImage(event.target.value)} />
                </label>
                <button className="btn">Add book</button>
            </form>
        </section>
    )
}