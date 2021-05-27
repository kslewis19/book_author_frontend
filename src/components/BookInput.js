import { TextField, Button } from '@material-ui/core';
import { useState } from 'react';


export default function BookInput(props) {
    const [title, setTitle] = useState(null)

    const handleSubmit = () => {
        console.log(title)
        props.setTitle(title)
    }
    return (
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
    )
}