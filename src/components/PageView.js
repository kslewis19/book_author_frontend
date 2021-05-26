import BookInput from "./BookInput";
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AuthorDisplay from './AuthorDisplay'

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
    useEffect(() => {

        const fetchAuthor = () => {
            const url = new URL("http://localhost:8000/book");
            url.searchParams.append("title", title);

            const axios = require('axios');
            axios.get(url)
                .then(response => {
                    console.log(response.data.author);
                    setAuthor(response.data.author)
                }, error => {
                    console.log(error);
                });

        }
        fetchAuthor()
    }, [title])



    return (
        <div className={classes.container}>
            <h1>Find An Author</h1>
            <div className={classes.main}>
                {title == null ? <BookInput setTitle={setTitle} /> : <AuthorDisplay title={title} author={author} setTitle={setTitle} />}
            </div>
        </div>
    )
}