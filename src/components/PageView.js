import BookInput from "./BookInput";
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    main: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "5vh"
    },


}));


export default function PageView() {
    const classes = useStyles();
    const [title, setTitle] = useState(null)
    const [author, setAuthor] = useState("a name")
    useEffect(() => {
        fetchAuthor()
    }, [title])


    function fetchAuthor() {
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

    return (
        <div className={classes.main}>

            {title == null ? <BookInput setTitle={setTitle} /> : <div>The author of '{title}' is {author}!</div>}
        </div>
    )
}