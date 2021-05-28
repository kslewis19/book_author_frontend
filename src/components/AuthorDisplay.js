import { Button } from '@material-ui/core';
import BookCard from './BookCard'

export default function AuthorDisplay (props){
   
    return(
        <div style={{display: "flex", flexDirection:" column"}}>
            The author of '{props.title}' is {props.author}!
            <Button
                variant="contained"
                color="inherit"
                onClick={()=>{props.setTitle(null)}}
            >
                Try Again
                    </Button>

                <h3>Not It? Heres some other authors for the search '{props.title}'</h3>
               
                {props.books.map((book, index) => {
                    try{
                    return(
                    <BookCard title={book.volumeInfo.title} author={book.volumeInfo.authors} image={book.volumeInfo.imageLinks.smallThumbnail}/>
                    
                )}catch(e){
                        console.log(book.volumeInfo.title, "was not able to load")
                }
                return (
                    <div/>
                )
                })}
        </div>
    )
}
