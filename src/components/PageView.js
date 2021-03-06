import BookInput from "./BookInput";
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AuthorDisplay from './AuthorDisplay'
import Navbar from "./NavBar";

const useStyles = makeStyles(() => ({
    main: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "5vh"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }


}));


export default function PageView() {
    const classes = useStyles();
    const [title, setTitle] = useState(null)
    const [author, setAuthor] = useState("a name")
    const [books, setBooks] = useState([])
    useEffect(() => {

        const fetchAuthor = () => {
            const url = new URL("http://localhost:8000/book");
            url.searchParams.append("title", title);

            const axios = require('axios');
            axios.get(url)
                .then(response => {
                    console.log(response.data.author);
                    console.log(response.data.books)
                    setAuthor(response.data.author)
                    setBooks(response.data.books)
                }, error => {
                    console.log(error);
                });
        }
        fetchAuthor()
    }, [title])



    return (
        <div className={classes.container}>
            <Navbar />
            <div style={{ backgroundColor: "lightgray", marginTop: 30, paddingLeft: 30, paddingRight: 30 }}>
                <h1 style={{ fontFamily: 'Open Sans', color: "gray", size: 450 }}>Find A Book</h1>
            </div>
            <div className={classes.main}>
                {(title === null || author === "Malka Older") ? <BookInput setTitle={setTitle} /> : <AuthorDisplay title={title} author={author} setTitle={setTitle} books={books} />}
            </div>
        </div>
    )
}