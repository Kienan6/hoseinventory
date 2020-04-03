import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Splash from '../shared/splash';
import { useEffect } from 'react';
import HoseLookup from './hoseLookup';
import FormPage from './formPage';
import API from '../utils/details';

const useStyles = makeStyles ( theme => ({
  close: {
      padding: theme.spacing(0.5),
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  success: {
    backgroundColor: "green",
  },
}));
/*
Top level component
*/
export default function HoseInventory(props) {

    const classes = useStyles();
    //add/update hose information
    const [hose, setHose] = useState({
        inventoryNum: 0,
        number: 0,
        size: 2.5,
        length: 0,
        previous: {unit:"", department:""},
        current: {unit:"", department:""},
        new: {unit: "", department: ""},
        test: 0,
        hoseOK: false,
        gasketOK: false,
        descHose: "",
        descGasket: "",
        manufacturer: "",
        mfgDate: 2000,
    });
    //information pane
    const [info, setInfo] = useState({
        inventoryNum: 0,
        number: 0,
        size: 2.5,
        length: 0,
        previous: {unit:"", department:""},
        test: 0,
        hoseOK: false,
        gasketOK: false,
        descHose: "",
        descGasket: "",
        manufacturer: "",
        mfgDate: 2000,
    });
    //ui state
    const [loading, setLoading] = useState(false);
    const [showForm, setForm] = useState(false);
    const [error, setError] = useState(false);
    const [snackbar, setSnackbar] = useState(false);
    const [lookupID, setLookupID] = useState(-1);
    const [expanded, setExpanded] = useState(false);


    //loading screen
    useEffect(() => {
        function splashTimer() {
            setTimeout(() =>{
                setLoading(false);
            }, 3000);
        }
        if(loading) splashTimer();
    }, [loading]);
    const handleLookupSubmit = e => {
        e.preventDefault();
        const h = {
            inventoryNum: parseInt(lookupID)
        }
        axios
            .post(API+ "getHose", {h})
            .then(res => {
                if(res.data.failure){
                    setError(true);
                } else {
                    setLoading(true);
                    var data = res.data;
                    setInfo({
                        inventoryNum: data.inventoryNum,
                        number: data.hoseNum,
                        size: data.size,
                        length: data.length,
                        previous: data.prevLoc,
                        test: data.dateTest,
                        hoseOK: data.passHose,
                        gasketOK: data.passGasket,
                        descHose: data.descHose,
                        descGasket: data.descGasket,
                        manufacturer: data.manufacturer,
                        mfgDate: data.yearMfg,
                    });
                    setHose({
                        ...hose,
                        inventoryNum: data.inventoryNum,
                        number: data.hoseNum,
                        size: data.size,
                        length: data.length,
                        previous: data.prevLoc,
                        current: data.curLoc,
                        new: data.curLoc,
                        manufacturer: data.manufacturer,
                        mfgDate: data.yearMfg,
                    });
                    setForm(true);
                }
            });
    }
    const handleLookupChange = e => {
        setLookupID(e.target.value);
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        //using update in two seperate instances hence newInvNum
        const h = {
            inventoryNum: parseInt(hose.inventoryNum),
            newInvNum: parseInt(hose.inventoryNum),
            hoseNum: parseInt(hose.number),
            hosePass: hose.hoseOK,
            gasketPass: hose.gasketOK,
            hoseSize: hose.size,
            hoseLength: parseInt(hose.length),
            hoseMfgDate: parseInt(hose.mfgDate),
            prevLocation: hose.current,
            newLocation: expanded ? hose.new : hose.current,
            dateTested: hose.test,
            manufacturer: hose.manufacturer,
            descHose: hose.descHose,
            descGasket: hose.descGasket
        }
        axios
            .post(API +"updateHose", {h})
            .then(res => {
                if(res.data.failure){
                    //message or something/ snackbar
                } else {
                    setSnackbar(true);
                }
            });
    }
    const handleFormChange = name => e => {
        if(e.target.type === 'checkbox') {
            setHose({...hose, [name]: e.target.checked})
        } else {
            setHose({...hose, [name] : e.target.value });
        }
    }
    const handleAutoCorrect = name => (e, value) => {
        setHose({...hose, [name]: value});
    };
    const handleSnackBarClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
      
        setSnackbar(false);
    }
    const handleExpansion = (e, expand) => {
        setExpanded(expand);
    }

    //render depending on state
    if( loading ){//splash screen
        return (
            <Splash />
        );
    } else if( showForm ) {//form screen
        return (
            <Fade in timeout={500}>
            <Container>
                <FormPage
                    onChange={handleFormChange}
                    onSubmit={handleFormSubmit}
                    onAuto={handleAutoCorrect}
                    onExpand={handleExpansion}
                    hose={hose}
                    info={info} 
                    expanded={expanded}
                    />
                <Snackbar
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    open={snackbar}
                    autoHideDuration={4000}
                    onClose={handleSnackBarClose}
                    ContentProps={{
                    'className': classes.success,
                    'aria-describedby': 'message-id',
                    }}
                    message={
                        <span id="message-id">
                        {"Updated need to change"}
                        </span>
                    }
                    action={[
                    <Button variant="contained" key="newHose" color="default" size="medium" onClick="">
                        New Hose
                    </Button>,
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleSnackBarClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                    ]}
                />
            </Container>
            </Fade>
        );
    } else {//Hose lookup screen
        return (
            <HoseLookup 
            onSubmit={handleLookupSubmit}
            onChange={handleLookupChange}
            error={error}
            />
        );
    }
}