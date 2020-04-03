import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import Fade from '@material-ui/core/Fade';

/*
props
error,
onChange
onSubmit
*/
export default function HoseLookup(props) {
    return(
            <Fade in timeout={1200}>
                <div>
                    <form onSubmit={props.onSubmit}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            spacing={2}
                            style={{
                            minHeight: "100vh"
                        }}>
                            <Grid item>
                                <FormControl>
                                    <FormLabel filled component="h2">Enter the Hose Inventory Number</FormLabel>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl required>
                                    <TextField
                                        error={props.error}
                                        helperText={props.error
                                        ? "Inventory number not found"
                                        : ""}
                                        required
                                        autoFocus
                                        name="hoseID"
                                        onChange={props.onChange}
                                        type="number"
                                        id="hoseID"
                                        label="Hose Inventory Number"
                                        variant="filled"/>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <Button variant="contained" type="submit" color="primary">Submit</Button>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Fade>
    );
}