import React, {useState, useEffect} from 'react';
import {
    Grid,
    Container,
    Paper,
    Typography,
    Button,
    withStyles,
    makeStyles,
    Snackbar,
} from '@material-ui/core';
import 'typeface-roboto';
import ProgressWidget from './progressWidget'
import AddNewForm from './addNewForm';
import Information from './information.js';
import {percentageComplete} from '../utils/logistics';
import axios from 'axios';
import {sizes} from '../utils/department';
import Overlay from '../shared/overlay';
import { validateDate } from '../utils/logistics';
import { Alert } from '@material-ui/lab';
import API from '../utils/details';
const PromptButton = withStyles(theme => ({
    root: {
        padding: "0 5px",
        borderRadius: 2,
        margin: 5,
        backgroundColor: 'rgb(135, 201, 170)',
        color: 'rgb(43, 170, 102)',
        color: 'white',
        height: 40,
        "&:hover": {
            backgroundColor: 'rgb(43, 170, 102)'
        }
    }
}))(Button);

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 25,
        zIndex: 10
    }
}));

export default function ProgressPanel(props) {

    //add/update hose information
    const [hose, setHose] = useState({
        inventoryNum: 0,
        number: 0,
        size: 2.5,
        length: 0,
        previous: {unit:"", department:""},
        current: {unit:"", department:""},
        test: 0,
        hoseOK: false,
        gasketOK: false,
        descHose: "",
        descGasket: "",
        manufacturer: "",
        mfgDate: 2000,
    });
    //information loading
    const [loading, setLoading] = useState(true);
    //hose was either updated or added
    const [submitted, setSubmitted] = useState(false);
    //add/delete/update were successful
    const [success, setSuccess] = useState(false);
    //hose data
    const [data, setData] = useState([]);
    //percentages for widget
    const [percentages, setPercentages] = useState([]);
    //old inventory number for update
    const [oldInvNum, setOld] = useState(-1);
    //overlay for add/update
    const [openOverlay, setOpenOverlay] = useState({
        open: false, 
        prompt: false, 
        edit: false,
        delete: false,
    });
    //snackbar for feedback
    const [snackOpen, setSnack] = useState({
        open: false,
        error: false,
        message: "",
    });

    const classes = useStyles();

    //get all data at start and add a splash
    //update on new information
    useEffect(() => {
        async function getHoses() {
            await axios
                .get(API +"getAllHoses")
                .then(res => {
                    if(!res.data.failure){
                        setData(res.data);
                        //set completed percentages
                        var completed = [];
                        sizes.forEach(size => {
                            completed.push({
                                size: size.label, percentage: percentageComplete(res.data, size.value)
                            });
                        });
                        setPercentages(completed);
                    } else {
                        var completed = [];
                        sizes.forEach(size => {
                            completed.push({
                                size: size.label, percentage: 100
                            });
                        });
                        setPercentages(completed);
                    }
                });
        }
        getHoses();
        var t = 0;
        setTimeout(() => {
            if (data != null) {
                setLoading(false);
            } else {
                t += 100;
            }
        }, 1500 + t);
    },[]);
    //update the information data by just getting the new hose
    //instead of the entire list of hoses
    //runs on success of update/add
    useEffect(() => {
        async function getHose() {
            var h = {
                inventoryNum: parseInt(hose.inventoryNum),
            }
            await axios
                .post(API+ "getHose",{h})
                .then(res => {
                    if(!res.data.failure){
                        //splice in new hose/update old one if it was existing
                        var updated = data;
                        var index = data.findIndex(x => x.inventoryNum == hose.inventoryNum || x.inventoryNum == oldInvNum);
                        if(index != -1){//edited because it already exists
                            //just splice into the current data array
                            //dont want to rerender every single hose
                            var updated = data;
                            updated.splice(index, 1, res.data);
                            setData(updated);
                            setOld(-1);
                        } else { //added so just push to data array
                            var updated = data;
                            updated.push(res.data);
                            setData(updated);
                        }    
                    }
                    //set completed percentages
                    var completed = [];
                    sizes.forEach(size => {
                        completed.push({
                            size: size.label, percentage: percentageComplete(data, size.value)
                        });
                    });
                    setPercentages(completed);
                });
        }
        if(success){//only run on success to true
            getHose();
        }
    }, [success]);
    const handleSubmit = (e) => {
            e.preventDefault();
            const h = {
                inventoryNum: parseInt(hose.inventoryNum),
                hoseNum: parseInt(hose.number),
                hosePass: hose.hoseOK,
                gasketPass: hose.gasketOK,
                hoseSize: hose.size,
                hoseLength: parseInt(hose.length),
                hoseMfgDate: parseInt(hose.mfgDate),
                prevLocation: hose.previous,
                newLocation: hose.current,
                dateTested: hose.test,
                manufacturer: hose.manufacturer,
                descHose: hose.descHose,
                descGasket: hose.descGasket
            }
            axios
                .post(API+"insert", {h})
                .then(res => {
                    setSubmitted(true);
                    if(res.data.failure){
                        setSnack({
                        open: true,
                        error: true,
                        message: res.data.message,
                        });
                      setSubmitted(false);
                    } else {
                      //simulate loading
                      setSuccess(true);
                      setTimeout(() => {
                        setSubmitted(false);
                        setSnack({
                            open: true,
                            error: false,
                            message: "Hose Added!"
                        });
                      }, 2000);
                    }
                })
    }
    const handleEditSubmit = (e) => {
        //remember to get the hose back after edit
        //and update the current hose number so that use
        //effect can update properly
        e.preventDefault();
        const h = {
            inventoryNum: parseInt(oldInvNum),
            newInvNum: parseInt(hose.inventoryNum),
            hoseNum: parseInt(hose.number),
            hosePass: hose.hoseOK,
            gasketPass: hose.gasketOK,
            hoseSize: hose.size,
            hoseLength: parseInt(hose.length),
            hoseMfgDate: parseInt(hose.mfgDate),
            prevLocation: hose.previous,
            newLocation: hose.current,
            dateTested: hose.test,
            manufacturer: hose.manufacturer,
            descHose: hose.descHose,
            descGasket: hose.descGasket
        }
        axios
            .post(API +'updateHose', {h})
            .then(res => {
                setSubmitted(true);
                if(res.data.failure) {
                    setSubmitted(false);
                } else {
                    //simulate loading
                    setSuccess(true);
                    setTimeout(() => {
                        setSubmitted(false);
                        setSnack({
                            open: true,
                            error: false,
                            message: "Hose Updated!"
                        });
                    }, 2000);
                }
            })
    }
    const handleDelete = (e,selected) => {
        e.preventDefault();
        setHose({...hose, inventoryNum: data[selected].inventoryNum});
        setOpenOverlay({
            ...openOverlay,
            prompt: true,
            delete: true,
        });
    }
    const handleClickOutside = (e) => {
        //prompt for cancel if not already submitted

        if(!success) {
            setOpenOverlay({
                ...openOverlay,
                prompt: true
            });
        } else {
            //already submitted
            setSubmitted(false);
            setSuccess(false);
             //set overlay to closed
             setOpenOverlay({
                ...openOverlay,
                open: false,
                prompt: false
            });
        }
    };
    const handlePrompt = selected => e => {
        //yes was hit
        if (selected) {
            setSubmitted(false);
            setSuccess(false);
            //set overlay to closed
            setOpenOverlay({
                ...openOverlay,
                open: false,
                prompt: false
            });
        } else {
            //prompt canceled "No"
            setOpenOverlay({
                ...openOverlay,
                prompt: false
            });
        }
    }
    const handlePromptDelete = selected => e => {
        if(selected) {
            //delete/send ajax request
            const h = {
                inventoryNum: parseInt(hose.inventoryNum),
            }
            axios
                .post(API+'deleteHose', {h})
                .then(res => {
                    if(res.data.failure){

                    } else {
                        //update data in information pane
                        if(data.length > 1){
                            var updated = data;
                            updated.splice(updated.findIndex(h => h.inventoryNum == hose.inventoryNum), 1);
                            setData(updated);
                            //update percentages
                            var completed = [];
                            sizes.forEach(size => {
                                completed.push({
                                    size: size.label, percentage: percentageComplete(data, size.value)
                                });
                            });
                            setPercentages(completed);
                        } else {
                            setData([]);
                        }
                        setSnack({
                            open: true,
                            error: false,
                            message: "Hose Deleted!",
                        });
                    }
                });

        }
        //remove prompt and reset hose data
        setOpenOverlay({
            ...openOverlay,
            prompt: false,
            delete: false,
        });
    }
    const handleChange = name => e => {
        //if they re edit the form, set to false
        if(success){
            setSuccess(false);
        }
        if(e.target.type === 'checkbox') {
            setHose({...hose, [name]: e.target.checked})
        } else {
            setHose({...hose, [name] : e.target.value });
        }
        if(name == 'test'){
            validateDate(e.target.value);
        }
    };
    const handleAutoCorrect = name => (e, value) => {
        //if they re edit the form, set to false
        if(success){
            setSuccess(false);
        }
        setHose({...hose, [name]: value});
    };
    const Prompt = props => {
        return (
            <Paper elevation={0} className={classes.paper}>
                <Grid container direction="column" justify="center">
                    <Grid item container justify="center">
                        <Typography variant="h6">
                            {props.label}
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        direction="row"
                        justify="center"
                        alignContent="space-between">
                        <PromptButton
                            onClick={props.onCancel}
                            style={{
                            backgroundColor: 'rgb(194, 103, 103)'
                        }}>
                            No
                        </PromptButton>
                        <PromptButton onClick={props.onAccept}>
                            Yes
                        </PromptButton>
                    </Grid>
                </Grid>
            </Paper>
        );
    };
    const handleSnackClose = (event,reason) => {
        if(reason === 'clickaway'){
            return;
        }
        setSnack({
            open: false,
            error: false,
            message: ""
        });
    };
    const NotificationBar = props => {
        return (
            <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            open={snackOpen.open}
            autoHideDuration={3000}
            onClose={handleSnackClose}>
                <Alert severity={snackOpen.error ? "error" : "success"}>{snackOpen.message}</Alert>
            </Snackbar>
        )
    };
    // using index to find the item to edit which can be pulled from data. data needs
    // to be filtered the same way first or maybe pre filter the data in use effect
    // to get rid of nulls for now
    const handleEdit = (e, item) => {
        var selected = data[item];
        setHose({
            inventoryNum: selected.inventoryNum,
            number: selected.hoseNum,
            size: selected.size,
            length: selected.length,
            previous: selected.prevLoc,
            current: selected.curLoc,
            test: selected.dateTest,
            hoseOK: selected.passHose,
            gasketOK: selected.passGasket,
            descHose: selected.descHose,
            descGasket: selected.descGasket,
            manufacturer: selected.manufacturer,
            mfgDate: selected.yearMfg,
        });
        //just in case it is changed
        setOld(selected.inventoryNum);
        setOpenOverlay({
            ...openOverlay,
            edit: true,
            open: true
        });
    }
    const handleAddNew = (e) => {
        setHose({
            inventoryNum: 0,
            number: 0,
            size: 2.5,
            length: 0,
            previous: {unit:"", department:""},
            current: {unit:"", department:""},
            test: 0,
            hoseOK: false,
            gasketOK: false,
            descHose: "",
            descGasket: "",
            manufacturer: "",
            mfgDate: 2000,
        });
        setOpenOverlay({
            ...openOverlay,
            edit: false,
            open: true
        });
    }
    return (
        <div>
            <Container>
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <Grid container direction="row" justify="center" align-items="flex-start">
                            {percentages.map(size => (
                                <Grid item>
                                    <ProgressWidget
                                        loading={loading}
                                        for={size.size + ' Hose'}
                                        percentage={(loading
                                        ? 0
                                        : size.percentage)}/>
                                </Grid>
                            ))
}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Information
                            data={data}
                            loading={loading}
                            onAdd={handleAddNew}
                            onEdit={handleEdit}
                            onDelete={handleDelete}/>
                    </Grid>

                </Grid>
            </Container>
            <NotificationBar />
            <Overlay open={openOverlay.open} onBackdropClick={handleClickOutside}>
                {openOverlay.edit
                    ? <AddNewForm
                        edit
                        onChange={handleChange}
                        onAuto={handleAutoCorrect}
                        onSubmit={handleEditSubmit}
                        submitted={submitted}
                        hose={hose}
                        label="Edit Hose"
                        />
                    : <AddNewForm
                        onChange={handleChange}
                        onAuto={handleAutoCorrect}
                        onSubmit={handleSubmit}
                        submitted={submitted}
                        hose={hose}
                        label="Add New Hose"/>}
            </Overlay>

            {openOverlay.prompt
                ? <Overlay open={openOverlay.prompt}>
                        {openOverlay.delete ?
                            <Prompt label={`Delete Hose ${hose.inventoryNum}?`} onAccept={handlePromptDelete(true)} onCancel={handlePromptDelete(false)}/>
                            : <Prompt label="Cancel?" onAccept={handlePrompt(true)} onCancel={handlePrompt(false)}/>
                        }
                    </Overlay>
                : ""
            }
        </div>
    );
}