import React from 'react';
import {Grid, TextField, Button, Paper, FormControl, Typography, FormHelperText, Link} from '@material-ui/core';
export default function Login(props) {
    const BigButton = (props) =>(
        <Button 
        style={{color: "white", background: "#63d691", width:"100%"}}
        type="submit" >{props.children}</Button>
    );
    return (
        <Paper style={{padding: 10}}>
        <form onSubmit={props.onSubmit}>
            <Typography 
            variant="h6" 
            align="center" 
            color="textSecondary"
            style={{paddingBottom: 10}}
            >
                Login
            </Typography>
            <Grid container
                direction="column"
                justify="center"
                alignItems="stretch"
                spacing={2}>
                <Grid item >
                    <FormControl required>
                    <TextField
                        required
                        error={props.error.error}
                        label="Username"
                        variant="outlined"
                        onChange={props.onChange('username')}
                        value={props.user.username}
                        />
                        </FormControl>
                </Grid>
                <Grid item>
                    <FormControl required>
                    <TextField
                            required
                            error={props.error.error}
                            label="Password"
                            type="password"
                            variant="outlined"
                            onChange={props.onChange('password')}
                            value={props.user.password}
                            />
                    {props.error.error ?
                        <FormHelperText error>Username or Password was Incorrect</FormHelperText> : ""
                    }
                    </FormControl>
                </Grid>
                <Grid item >
                    <FormControl fullWidth>
                        <BigButton>Submit</BigButton>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Link 
                        href="#"
                        color="textSecondary"
                        onClick={props.onClick(false)}>Create Account</Link>
                </Grid>
            </Grid>
        </form>
        </Paper>

    )
}