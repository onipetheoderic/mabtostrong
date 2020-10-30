import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { useAuthState } from '../context/auth';


export default function DynamicRoute(props) {
    const { user } = useAuthState();
    console.log("the user state r", user)

    if(props.authenticated && !user){
        return <Redirect to="login" />
    }
    //if a user is loggedIn and trying to access login and register page
    //we take them back to homepage
    else if(props.guest && user) {
        return <Redirect to="/" />
    }
    else{ return<Route component={props.component} {...props} />}
}