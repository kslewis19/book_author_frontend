import { TextField, Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import BookCard from './BookCard'

export default function BookInput(props) {
    const [title, setTitle] = useState(null)

    const [library, setLibrary] = useState([])
    useEffect(() => {

        const fetchLibrary = () => {
            const url = new URL("http://localhost:8000/library");

            const axios = require('axios');
            axios.get(url)
                .then(response => {
                    console.log(response.data.library);
                    setLibrary(response.data.library)
                }, error => {
                    console.log(error);
                });

        }
        fetchLibrary()
        //console.log("loaded")
    }, [])

    const handleSubmit = () => {
        //console.log(title)
        props.setTitle(title)
    }
    function Library() {
        console.log(library)
        if (library != null, library.length != 0) {
            return (
                <div>
                    { library.map((book, index) => (
                        <BookCard title={book.title} author={book.author} image={book.image} />

                    ))}
                </div>
            )
        }
        return (
            <div>There is nothing in your library</div>
        )
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
            <div style={{ display: "flex", alignContent: "center" }}>
                <TextField

                    label="enter book title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => {

                        setTitle(e.target.value)
                    }}
                />

                <Button
                    variant="contained"
                    color="inherit"
                    onClick={handleSubmit}
                >
                    Enter
                    </Button>

            </div>
            <Library />

        </div>
    )
}