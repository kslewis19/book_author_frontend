import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FcPlus } from "react-icons/fc";
import { BsFillTrashFill } from "react-icons/bs";
import { TextField, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '75%',
        maxWidth: '45ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function BookCard(props) {
    const classes = useStyles();
    const [isEditing, setIsEditing] = useState(false)
    const [desc, setDesc] = useState(props.desc)
    const [isDeleted, setIsDeleted] = useState(false)


    const addBook = () => {

        const axios = require('axios');

        axios.post('http://localhost:8000/book', {
            title: props.title,
            author: props.author,
            image: props.image,
            desc: "N/A"
        })
            .then((response) => {
                console.log(response);
                setIsDeleted(true)
            }, (error) => {
                console.log(error);
            });

    }
    const deleteBook = () => {
        const axios = require('axios');

        axios.post('http://localhost:8000/delete', {
            title: props.title,
            author: props.author,
            image: props.image,
            desc: props.desc
        })
            .then((response) => {
                console.log(response);
                setIsDeleted(true)
            }, (error) => {
                console.log(error);
            });

    }
    const editBook = () => {
        const axios = require('axios');

        axios.post('http://localhost:8000/edit', {
            old: {
                title: props.title,
                author: props.author,
                image: props.image,
                desc: props.desc
            },
            new: {
                title: props.title,
                author: props.author,
                image: props.image,
                desc: desc
            }
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        setIsEditing(false)
    }



    return (
        <div>

            {!isDeleted && <div>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" variant="square" className={classes.square} src={props.image} />
                    </ListItemAvatar>
                    <ListItemText
                        component={'span'}
                        primary={props.title}
                        secondary={
                            <React.Fragment >
                                <span style={{ display: "flex", flex: 1, flexDirection: "row" }}>
                                    <span style={{ flex: 1 }}>
                                        <Typography
                                            component={'span'}
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            By: {props.author}

                                        </Typography>
                                    </span>
                                    {!props.isLibrary &&
                                        <IconButton
                                            color="primary"
                                            onClick={() => {
                                                addBook()
                                                console.log("added")
                                            }}
                                        >
                                            <FcPlus />
                                        </IconButton>
                                    }
                                    {props.isLibrary && <div>
                                        <IconButton
                                            color="primary"
                                            onClick={() => {
                                                setIsEditing(!isEditing)
                                                console.log("edited")
                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            color="primary"
                                            onClick={() => {
                                                deleteBook()
                                                console.log("deleted")
                                            }}
                                        >
                                            <BsFillTrashFill style={{ color: "red" }} />
                                        </IconButton>
                                    </div>
                                    }

                                </span>

                            </React.Fragment>
                        }
                    />
                </ListItem>
                {props.isLibrary && !isEditing && <div>Desscription : {desc}</div>}
                {isEditing && <div>
                    <TextField
                        label="enter description"
                        variant="outlined"
                        value={desc}
                        style={{ width: 550 }}
                        onChange={(e) => {

                            setDesc(e.target.value)
                        }}
                    />
                    <Button
                        variant="contained"
                        color="inherit"
                        onClick={editBook}
                    >
                        Submit
                 </Button>

                </div>}
                <div>
                    <Divider />
                </div>

            </div>}
        </div>
    )
}