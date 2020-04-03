import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Login from './login';
import Create from './create';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import API from '../utils/details';
import Guide from '../shared/guide';


//login/create account page
export default function Account(props) {
    const [login, setLogin] = useState(true);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState({
        error:false,
        message: ""});
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        props.auth.login(user, (res) => {
            if(!res.failure){
                props.auth.authenticate(function(){
                    setSuccess(true);
                    props.onSuccess();
                });
            } else {
                setError({
                    error: res.failure,
                    message: res.message,
                });
            }
        });
        
    }
    const handleLoginChange = value => e => {
        setLogin(value);
    }
    const handleChange = name => e => {
        setUser({
            ...user,
            [name]: e.target.value,
        })
    }
    const handleCreateSubmit = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios
            .post(API+"user/create", {user})
            .then((res) =>{
                if(res.failure){
                    setError({
                        error: res.failure,
                        message: res.message,
                    })
                } else {
                    //log the user in directly after creating an account
                    props.auth.login(user, (res) => {
                        if(!res.failure){
                            props.auth.authenticate(() => {
                                setSuccess(true);
                                props.onSuccess();
                            });
                        } else {
                            setError({
                                error: true,
                                message: "Could not log in."
                            })
                        }
                    });
                }
            })
    }
    if(success){
        return (
            <Redirect to="/inventory" />
        );
    }
    return(
        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            style={{minHeight: "100vh"}}>
                <Grid
                container
                direction="row"
                justify="center"
                spacing={3}
                style={{padding:10, width: "auto"}}
                className="information-pane">
                    <Grid item>
                        <Guide />
                    </Grid>
                    <Grid item>
                    {login ? 
                    <Login error={error} onClick={handleLoginChange} onSubmit={handleLoginSubmit} onChange={handleChange} user={user}/> 
                    : <Create error={error} onClick={handleLoginChange} onSubmit={handleCreateSubmit} onChange={handleChange} user={user} />}
                    </Grid>
                </Grid>
            </Grid>
    )
}