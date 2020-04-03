import React, { useEffect, useState } from 'react';
import HoseInventory from './common/main/hoseInventory';
import Account from './common/accounts/account';
import ProgressPanel from './common/admin/progress'
import 'overlayscrollbars/css/OverlayScrollbars.css';
import './App.css';
import {Auth} from './common/shared/auth';
import {BrowserRouter as Router, useLocation, Route, Switch, Link, Redirect} from 'react-router-dom';
import Splash from './common/shared/splash';
import Menu from './common/shared/menu';
import { Grid } from '@material-ui/core';
import Logout from './common/logout/logout';

function App() {
    const [userAuth, setUserAuth] = useState({
      admin: false,
      loggedIn: false,
    });
    const [loggedIn, setLoggedIn] = useState(false);
    const [showMenu, setMenu] = useState(false);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    Auth.authenticate(()=>{
      if(Auth.authenticated){
        setLoggedIn(true);
        setMenu(true);
      }
      setTimeout(() => {
        setLoading(false);
      }, 500);
    })
  }, []);
  const ProtectedRoute = 
  ({component: Component, privledges: {admin, authenticate, prevent}, ...rest}) => (
    <Route {...rest} render={(props) => {
        if(admin){
          if(Auth.admin === true){
            return (<Component {...rest.auth} />)
          } else {
            return (<Redirect to="/login" />)
          }
        }
        if(authenticate){
          if(Auth.authenticated === true) {
            return (<Component {...rest.auth} />)
          } else {
            return (<Redirect to="/login" />)
          }
        }
        if(prevent){
          if(Auth.authenticated === true){
            return (<Redirect to="/inventory" />)
          } else {
            return (<Component {...rest.auth} />)
          }
        }
    }} />
  );
  if(loading) {
    return <Splash />;
  }
  /*
  label, redirect path object array
  */
  const createMenuList = () => {
    return [{label: "Inventory", redirect: "/inventory"},
            {label: "Admin", redirect: "/admin"},
            {label: "Logout", redirect: "/logout"}];
  };
  const handleMenu = () => {
    //toggle menu shown
    setMenu(m => !m);
  }
  //{loggedIn ? <Redirect to="/inventory" /> : ""}
  return (
    <Router>

      {loggedIn ? <Redirect to="/inventory" /> : ""}

      { showMenu ? 
      <Grid container
        direction="row"
        justify="center">
          <Grid item>
            <Menu list={createMenuList()} permissions={{admin:Auth.admin}} />
          </Grid>
        </Grid> : ""
      }
      <Switch>

        <ProtectedRoute exact path="/"
        privledges={{admin: false, authenticate: false, prevent: true}} 
        component={() => (<Account auth={Auth} onSuccess={handleMenu} />)} />

        <ProtectedRoute exact path="/login"
        privledges={{admin: false, authenticate: false, prevent: true}} 
        component={() => (<Account auth={Auth} onSuccess={handleMenu} />)} />

        <ProtectedRoute exact path="/admin" 
            privledges={{admin: true, authenticate: true, prevent: false}} 
            component={ProgressPanel} />

        <ProtectedRoute exact path="/inventory" 
            privledges={{authenticate: true}} 
            component={HoseInventory} />

        <ProtectedRoute exact path="/logout"
            privledges={{authenticate: true}}
            component={() => (<Logout auth={Auth} onSuccess={handleMenu} />)} />
      </Switch>
    </Router>
  )
}

export default App;
