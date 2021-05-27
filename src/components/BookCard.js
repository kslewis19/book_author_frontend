import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MdCenterFocusStrong } from "react-icons/md";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function BookCard(props) {
    const classes = useStyles();


    const addBook = () => {

        const axios = require('axios');

        axios.post('http://localhost:8000/book', {
            title: props.title,
            author: props.author,
            image: props.image
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });

    }


    return (
        <div>
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
                                <IconButton
                                    color="primary"
                                    onClick={() => {
                                        addBook()
                                        console.log("added")
                                    }}
                                >
                                    <MdCenterFocusStrong />
                                </IconButton>
                            </span>

                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider />
        </div>
    )
}