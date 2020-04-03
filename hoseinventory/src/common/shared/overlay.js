import React from 'react';
import { makeStyles, Modal, Backdrop } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    open : {
       overflowX: "hidden",
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default function Overlay(props) {
    const classes = useStyles();
    return (
        <Modal
        open={props.open}
        className={classes.modal}
        onClose={props.onBackdropClick}
        BackdropComponent={Backdrop}
        BackdropProps={{
            transitionDuration: 500,
          }}
        >
            <div style={{padding: 10, maxWidth: 500}}>
                {props.children}
            </div>
        </Modal>

    );
}