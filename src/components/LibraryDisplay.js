import BookCard from './BookCard'
import { useEffect, useState, } from 'react';
import NavBar from './NavBar'
import { makeStyles } from '@material-ui/core/styles';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        alignItems: "center"

    },
    library: {
        maxWidth: '75%',
        display: "flex",
        alignContent: "center",
        justifyContent: "center"

    }

}));

export default function LibraryDisplay(props) {
    const classes = useStyles();
    const [library, setLibrary] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        const fetchLibrary = () => {
            const url = new URL("http://localhost:8000/library");

            const axios = require('axios');
            axios.get(url)
                .then(response => {
                    console.log(response.data);
                    setLibrary(response.data.library)
                    setIsLoading(false)
                }, error => {
                    console.log(error);
                });

        }
        fetchLibrary()
        //console.log("loaded")
    }, [])
    function Library() {
        console.log(library)
        if (library !== null && library.length !== 0) {
            return (
                <div style={{ width: "75%" }}>
                    { library.map((book, index) => (
                        <BookCard title={book.title} author={book.author} image={book.image} isLibrary={true} desc={book.desc} />

                    ))}
                </div>
            )
        }
        return (
            <div>There is nothing in your library</div>
        )
    }

    function Loading() {
        return (<div>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </div>)
    }
    return (
        <div className={classes.root}>
            <NavBar />
            <div className={classes.library}>
                {isLoading ? <Loading /> : <Library />}

            </div>
        </div>
    )
}