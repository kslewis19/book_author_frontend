import { TextField, Button } from '@material-ui/core';
import { useState } from 'react';


export default function BookInput(props) {
    const [title, setTitle] = useState("")



    const handleSubmit = () => {
        //console.log(title)
        props.setTitle(title)
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
            <div style={{ display: "flex", alignContent: "center" }}>
                <TextField
                    style={{ backgroundColor: "white" }}
                    label="enter book title"
                    id="filled-start-adornment"
                    variant="filled"
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

        </div>
    )
}