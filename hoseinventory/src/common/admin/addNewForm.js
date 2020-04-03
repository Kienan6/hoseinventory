import React, {useState, useEffect} from 'react';
import { sizes, designators } from '../utils/department';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles, Button, withStyles, Grid, FormControl, TextField, InputLabel, Select, MenuItem, Switch, FormHelperText, FormControlLabel, Paper, Toolbar, Typography, Modal} from '@material-ui/core';
import Loader from 'react-loader-spinner';

const useStyles = makeStyles(theme => ({
    root: {
      width: "80%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    column: {
        flex: "1",
    },
    layout: {
        "& div": {
            marginTop: 5,
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
  }));
const AddNewButton = withStyles(theme => ({
    root: {
        padding: "0 30px",
        flexGrow: "100%",
        borderRadius: 3,
        boxShadow: '0px 2px 3px rgba(0,0,0,.20)',
        backgroundColor: 'rgb(102, 209, 127)',
        color: 'rgb(43, 170, 102)',
        color: 'white',
        height: 40,
        "&:hover": {
            backgroundColor: 'rgb(43, 170, 102)',
        }
    },
})) (Button);
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
export default function AddNewForm(props) {

    const classes = useStyles();
    const[expanded, setExpanded] = useState(false);


    return (
                <Paper elevation={0}
                borderRadius={20}>
                    <Modal
                        open={props.submitted}
                        className={classes.modal}
                        BackdropComponent='div'
                        >
                        <Grid
                            container
                            justify="center"
                            alignItems="center">
                            <Grid item>
                                <Loader type="Oval" color="#227ca8" height={75} width={75}/>
                            </Grid>
                        </Grid>
                    </Modal>
                    <Toolbar>
                        <Typography variant="h6">
                            {props.label}
                        </Typography>
                    </Toolbar>
                        
                    <form onSubmit={props.onSubmit}>
                        <Grid container
                            direction="row"
                            className={classes.layout}
                            alignItems="flex-start"
                            justify="space-around">
                                <Grid container
                                    item
                                    direction="column"
                                    justify="center"
                                    style={{margin: 10}}
                                    xs>
                                        <FormControl required>
                                                <TextField 
                                                label="Hose Number" 
                                                required
                                                variant="outlined"
                                                value={props.hose.number == 0 ? "" : props.hose.number}
                                                InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                inputProps={{
                                                    pattern: "^[0-9]*$",
                                                }}
                                                onChange={props.onChange('number')}
                                                id="inventory-number" />
                                            </FormControl>
                                            <FormControl required>
                                            <TextField
                                                label="Length"
                                                required
                                                variant="outlined"
                                                value={props.hose.length == 0 ? "" : props.hose.length}
                                                onChange={props.onChange('length')}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    pattern: "^[0-9]*$",
                                                }}
                                                id="hose-length" />
                                            </FormControl>
                                            <FormControl required>
                                            <Autocomplete
                                                id="hose-current"
                                                options={designators().sort((a,b) => a.department < b.department)}
                                                groupBy={option => option.department}
                                                getOptionLabel={option => option.unit}
                                                onChange={props.onAuto('current')}
                                                value={props.hose.current}
                                                renderInput={params => (
                                                    <TextField {...params} 
                                                    variant="outlined"
                                                    required
                                                    label="Current Location"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                        }}
                                                    fullWidth/>
                                                  )}
                                                />
                                            </FormControl>
                                            <FormControl required>
                                                <TextField
                                                    id="date-tested"
                                                    required
                                                    variant="outlined"
                                                    label="Date Tested"
                                                    type="date"
                                                    value={props.hose.date == 0 ? "" : props.hose.test}
                                                    onChange={props.onChange('test')}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </FormControl>
                                            <FormControl>
                                                <TextField
                                                    id="manufacturer"
                                                    required
                                                    variant="outlined"
                                                    label="Manufacturer"
                                                    value={props.hose.manufacturer}
                                                    onChange={props.onChange('manufacturer')}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </FormControl>
                                    </Grid>
                                    <Grid container
                                    item
                                    direction="column"
                                    justify="center"
                                    style={{margin: 10}}
                                    xs>
                                        <FormControl required>
                                                <TextField
                                                label="Inventory Number"
                                                required
                                                variant="outlined"
                                                value={props.hose.inventoryNum == 0 ? "" : props.hose.inventoryNum}
                                                onChange={props.onChange('inventoryNum')}
                                                InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                inputProps={{
                                                    pattern: "^[0-9]*$",
                                                }}
                                                id="hose-number" />
                                            </FormControl>
                                            <FormControl style={{marginTop: 9, marginBottom: -4}} variant="outlined" required>
                                                <InputLabel htmlFor="hose-size" >Size</InputLabel>
                                                <Select
                                                labelId="hose-size"
                                                labelWidth={30}
                                                id="hose-size"
                                                value={props.hose.size}
                                                InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                onChange={props.onChange('size')}
                                                >
                                                    {sizes.map(s => (
                                                        <MenuItem value={s.value}>{s.label}</MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            <FormControl required >
                                            <Autocomplete
                                                id="hose-previous"
                                                fullWidth
                                                options={designators().sort((a,b) => a.department < b.department)}
                                                groupBy={option => option.department}
                                                getOptionLabel={option => option.unit}
                                                onChange={props.onAuto('previous')}
                                                value={props.hose.previous}
                                                renderInput={params => (
                                                    <TextField {...params}
                                                    variant="outlined"
                                                    required
                                                    label="Prev. Location"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                        }}
                                                    fullWidth/>
                                                  )}
                                                />
                                            </FormControl>
                                            <FormControl>
                                                <TextField
                                                    id="manufactured-date"
                                                    required
                                                    variant="outlined"
                                                    label="Date Manufactured"
                                                    value={props.hose.mfgDate}
                                                    onChange={props.onChange('mfgDate')}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </FormControl>
                                    </Grid>
                            </Grid>
                            <Grid container
                            direction="row"
                            justify="space-betwen"
                            spacing={2}
                            style={{padding: 10}}>
                                <Grid
                            container
                            item
                            direction="column"
                            justify="flex-start"
                            xs>
                                <FormControl>
                                    <FormHelperText id="my-helper-text-1">Does the Hose Pass Inspection?</FormHelperText>
                                    <FormControlLabel
                                        control={
                                        <LargeSwitch type = "checkbox"
                                            onChange={props.onChange('hoseOK')}
                                            checked={props.hose.hoseOK}
                                            name = "hosepass" aria-describedby = 'my-helper-text-1' />
                                        }
                                        label={props.hose.hoseOK? "Pass" : "Fail"}
                                        labelPlacement='start'
                                        className={classes.marginZero}/>
                                </FormControl>
                                {props.hose.hoseOK ? "" : 
                                    <FormControl>
                                        <TextField
                                        id="hose-description"
                                        label="Describe Issues"
                                        multiline
                                        value={props.hose.descHose}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                            }}
                                        onChange={props.onChange('descHose')}
                                        />
                                    </FormControl>}             
                            </Grid>

                            <Grid
                            container
                            item
                            direction="column"
                            justify="flex-start"
                            xs>
                                <FormControl>
                                    <FormHelperText id="my-helper-text-2">Does the Gasket Pass Inspection?</FormHelperText>
                                    <FormControlLabel
                                        control={
                                        <LargeSwitch type = "checkbox"
                                            onChange={props.onChange('gasketOK')}
                                            checked={props.hose.gasketOK}
                                            name = "gasketpass" aria-describedby = 'my-helper-text-2' />
                                        }
                                        label={props.hose.gasketOK? "Pass" : "Fail"}
                                        labelPlacement='start'
                                        className={classes.marginZero}/>
                                </FormControl> 
                                    {props.hose.gasketOK ? "" : 
                                    <FormControl>
                                        <TextField
                                        id="gasket-description"
                                        label="Describe Issues"
                                        multiline
                                        value={props.hose.descGasket}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                            }}
                                        onChange={props.onChange('descGasket')}
                                        />
                                </FormControl>}
                                </Grid>
                            </Grid>
                            <FormControl fullWidth>
                                
                                <div style={{padding: 10}}>
                                <AddNewButton type="submit" fullWidth>Submit</AddNewButton>
                                </div>
                            </FormControl>
                        </form>
                    
                </Paper>


    );
}