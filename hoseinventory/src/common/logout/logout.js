import React, { useEffect, useState } from 'react';
import Splash from '../shared/splash';
import Axios from 'axios';
import { Redirect } from 'react-router';
import API from '../utils/details';

export default function Logout(props) {
    const [loggedOut, setLoggedOut] = useState(false);
    useEffect(() => {
        Axios
        .get(API+"user/logout")
        .then(res => {
            props.auth.logout();
            props.onSuccess();
            setLoggedOut(true);
        });
    },[]);
    if(loggedOut) {
        return <Redirect to="/login" />
    }
    return (
        <Splash />
    )
}