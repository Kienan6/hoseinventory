import React, {Component, useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Autocomplete } from '@material-ui/lab';
import { designators, sizes } from '../utils/department'

const useStyles = makeStyles (theme => ({
    form: {
        padding: 20,
        flexGrow: 1
    },
    field: {
        width: 300
    },
    vertical: {
        display: 'flex',
        width: 600,
        height: 600,
        flexDirection: 'column'
    },
    marginZero: {
        justifyContent: "flex-end",
        margin: 0
    },
    formHelper: {
        fontSize: "1em",
    },
    bg: {
        backgroundColor: "#e8e8e8"
    },
    expansionPanel: {
        transition: theme.transitions.create(
            ['border'],
            {duration: 100},
        ),
        marginTop: 0,
        border: '1px #d0d0d0 outset'
    },
    expansionSelected : {
        border: "#3f51b5 3px solid",
    },
    heading: {
        fontSize: theme
            .typography
            .pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    },
    close: {
        padding: theme.spacing(0.5),
    },
}));
const LargeSwitch = withStyles(theme => ({
    root: {
        width: 100
    },
    switchBase: {
        color: "#fc4e4e",
        '&$checked': {
            color: "#85cf80",
            transform: "translateX(160%)"
        },
        '&$checked + $track': {
            backgroundColor: "#206b1b"
        }
    },
    checked: {},
    track: {}
}))(Switch);
/*
props:
onSubmit
onChange
onExpand
expanded
hose
*/
export default function HoseForm(props) {
    const classes = useStyles();
    var expansionClass = classes.expansionPanel + " " + (props.expanded ? classes.expansionSelected : ""); 
    return (
        <div>
            <Paper>
                <form onSubmit={props.onSubmit}>
                    <Grid container 
                    direction="column" 
                    justify="space-evenly" 
                    alignContent="center">
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignContent="center"
                                spacing={2}
                                className={classes.form}>
                                <Grid item>
                                    <FormLabel component="h1">Hose Evaluation</FormLabel>
                                </Grid>
                                <Grid item>
                                    <FormControl className={classes.field}>
                                        <TextField
                                            required 
                                            id="date"
                                            name="dateTested"
                                            label="Date Checked"
                                            type="date"
                                            onChange={props.onChange('test')}
                                            InputLabelProps={{
                                            shrink: true
                                        }}/>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl className={classes.field}>
                                        <FormHelperText className={classes.formHelper} id="changed-location-help">Has the Hose moved locations?</FormHelperText>

                                        <ExpansionPanel onChange={props.onExpand} 
                                                        className={expansionClass} 
                                                        elevation={0}>
                                            <ExpansionPanelSummary expandIcon={< ExpandMoreIcon />}>
                                                <Typography className={classes.heading}>
                                                    Current Location:
                                                    <strong> {props.hose.current.unit}</strong>
                                                </Typography>

                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails fullWidth>
                                            <Autocomplete
                                                id="hose-new"
                                                style={{width: "100%"}}
                                                options={designators().sort((a,b) => a.department < b.department)}
                                                groupBy={option => option.department}
                                                getOptionLabel={option => option.unit}
                                                onChange={props.onAuto('new')}
                                                value={props.hose.new}
                                                renderInput={params => (
                                                    <TextField {...params}
                                                    variant="outlined"
                                                    required
                                                    label="New Location"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                        }}
                                                    fullWidth/>
                                                )}
                                                />
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                    </FormControl>
                                </Grid>

                                <Grid item>
                                    <FormControl>
                                        <FormHelperText className={classes.formHelper} id="my-helper-text">Does the Hose pass inspection?</FormHelperText>

                                        <FormControlLabel
                                            control={< LargeSwitch type = "checkbox" onChange = {
                                            props.onChange('hoseOK')
                                        }
                                        checked = {
                                            props.hose.hoseOK
                                        }
                                        name = "hosepass" aria-describedby = 'my-helper-text' />}
                                            label={props.hose.hoseOK
                                            ? "Pass"
                                            : "Fail"}
                                            labelPlacement='start'
                                            className={classes.marginZero}/>
                                    </FormControl>
                                </Grid>
                                { !props.hose.hoseOK ?
                                    <Grid item>
                                        <FormControl>
                                            <FormHelperText>Describe the Issue</FormHelperText>
                                            <TextField 
                                            onChange={props.onChange('descHose')}
                                            variant="outlined"
                                            value={props.hose.descHose}
                                            />
                                            </FormControl>
                                    </Grid> : ""}
                                <Grid item>
                                    <FormControl>
                                        <FormHelperText className={classes.formHelper} id="my-helper-text-2">Does the Gasket/Seal pass inspection?</FormHelperText>

                                        <FormControlLabel
                                            control={< LargeSwitch type = "checkbox" onChange = {
                                            props.onChange('gasketOK')
                                        }
                                        checked = {
                                            props.hose.gasketOK
                                        }
                                        name = 'gasketpass' aria-describedby = 'my-helper-text-2' />}
                                            label={props.hose.gasketOK
                                            ? "Pass"
                                            : "Fail"}
                                            labelPlacement='start'
                                            className={classes.marginZero}/>
                                    </FormControl>
                                    { !props.hose.gasketOK ?
                                    <Grid item>
                                            <FormControl>
                                            <FormHelperText>Describe the Issue</FormHelperText>
                                            <TextField 
                                            onChange={props.onChange('descGasket')}
                                            variant="outlined"
                                            value={props.hose.descGasket}
                                            />
                                            </FormControl>
                                    </Grid> : ""}
                                </Grid>
                                <Grid item>
                                    <FormControl className={classes.field}>
                                        <Button variant="contained" type="submit" color="primary">Submit</Button>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                </form>
            </Paper>
        </div>
    );

}