import React, { useState, useEffect } from 'react';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { IconButton, makeStyles, Collapse, Paper, Grid, Divider, ClickAwayListener } from '@material-ui/core';
import {useLocation, Redirect} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    body: {
        width: "150px",
        marginTop: 10,
    },
    menu: {
        transition: theme.transitions.create(["transform","opacity"],
        {duration: theme.transitions.duration.short}),
        opacity: 0.7,
        marginBottom: 5, 
        "&:hover": {
            opacity: 1
        },
    },
    menuOpen: {
        transform: "rotate(-180deg)"
    },
    menuClosed: {
        transform: "rotate(0)",
    },
    menuBody:{
        width: "150px",
        top: 35,
        position: "absolute",
    },
    menuItem: {
        background:"#e6e6e6",
        color: "#3d515c",
        userSelect: "none",
        minHeight: 30,
        boxSizing: "border-box",
        borderRight: "4px solid rgba(0,0,0,0.8)",
        padding: 10,
        fontSize: 20,
        fontWeight: 500,
        textAlign: "center",
        transition: theme.transitions.create(["background"],
        {duration: theme.transitions.duration.shorter}),
        "&:hover":{
            backgroundColor: "#cccccc",

        }
    }
}));
export default function Menu(props) {
    const classes = useStyles();
    const [menuOpen, setMenu] = useState(false);
    const [redirect, setRedirect] = useState({
        selected: false,
        to: ""
    });
    const location = useLocation();
    const handleClick = (e) => {
        setMenu(m => !m);
    }
    useEffect(() => {
        if(redirect.selected){
            setRedirect({selected: false, to: ""});
        }
    });
    const getCorrectMenu = () => {
        var path = location.pathname;
        var items = props.list;
        items = items.filter(item => item.redirect != path);
        if(!props.permissions.admin){
            items = items.filter(item => item.redirect != "/admin");
        }
        return items;
    }
    const handleRedirect = index => e => {
        setMenu(false);
        setRedirect({selected: true, to: getCorrectMenu()[index].redirect});
    }
    const handleClickAway = e => {
        if(menuOpen) setMenu(false);
    }
    if(redirect.selected){
        return (<Redirect to={redirect.to} />)
    }
    const MenuList = (props) => {
        return(
            <React.Fragment>
            {getCorrectMenu().map((item,i) => (
                <React.Fragment>
                <Grid item>
                    <div onClick={handleRedirect(i)} className={classes.menuItem} key={i}>
                        {item.label}
                    </div>
                </Grid>
                <Divider />
                </React.Fragment>
                ))}
            </React.Fragment>
        )
    }
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
        <div className={classes.body}>
            <Grid container
            direction="column"
            alignItems="center">
                <Grid item>
                    <IconButton 
                    onClick={handleClick}
                    style={{padding: 0}}>
                        <ArrowDropDownCircleIcon
                        className={[classes.menu, 
                            menuOpen ? classes.menuOpen : classes.menuClosed].join(" ")}
                        fontSize="large"/> 
                    </IconButton>
                </Grid>
                <Grid container item
                    className={classes.menuBody}
                    alignItems="flex-start">
                    <Collapse in={menuOpen}
                    style={{width: "100%"}}
                    timeout={{enter: 250, exit: 400}}>
                            <Grid container
                                direction="column"
                                alignItems="stretch">
                                <MenuList />
                                </Grid>
                    </Collapse>
                </Grid>
            </Grid>
        </div>
        </ClickAwayListener>
    )
}