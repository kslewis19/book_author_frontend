import { Button } from '@material-ui/core';
import BookCard from './BookCard'
import { useEffect, useState, } from 'react';
import NavBar from './NavBar'


export default function LibraryDisplay(props) {

    const [library, setLibrary] = useState([])
    useEffect(() => {

        const fetchLibrary = () => {
            const url = new URL("http://localhost:8000/library");

            const axios = require('axios');
            axios.get(url)
                .then(response => {
                    console.log(response.data);
                    setLibrary(response.data.library)
                }, error => {
                    console.log(error);
                });

        }
        fetchLibrary()
        //console.log("loaded")
    }, [])
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
        <div>
            <NavBar />
            <Library />
        </div>
    )
}