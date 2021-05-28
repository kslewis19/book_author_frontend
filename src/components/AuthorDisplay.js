import { Button } from '@material-ui/core';
import BookCard from './BookCard'
import List from '@material-ui/core/List';

export default function AuthorDisplay(props) {

    return (
        <div style={{ display: "flex", flexDirection: " column", backgroundColor: "white" }}>
            <Button
                variant="contained"
                color="inherit"
                onClick={() => { props.setTitle(null) }}
            >
                Search Again
                    </Button>

            <h3>Search Results</h3>
            <List style={{ maxHeight: 650, overflow: 'auto' }} >
                {props.books.map((book, index) => {
                    try {
                        return (
                            <BookCard title={book.volumeInfo.title} author={book.volumeInfo.authors} image={book.volumeInfo.imageLinks.smallThumbnail} />

                        )
                    } catch (e) {
                        console.log(book.volumeInfo.title, "was not able to load")
                    }
                    return (
                        <div />
                    )
                })}
            </List>
        </div>
    )
}
