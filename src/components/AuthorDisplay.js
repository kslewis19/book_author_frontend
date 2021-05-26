import { Button } from '@material-ui/core';


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
        </div>
    )
}
