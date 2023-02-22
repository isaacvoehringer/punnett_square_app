import React from 'react';
// import { Switch } from '@mui/material';
import { Route, Switch, withRouter } from 'react-router-dom';
// import Navigation from './Navigation';
// import ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import Home from './components/Home';

import './App.css';



function App() {
  return (
    // const router = createBrowserRouter([
    //   {
    //     path: "/",
    //     element: <div>Hello Punnett</div>
    //   }
    // ])
    <Switch><Route path="/home" component={Home}></Route></Switch>
   
  )
}

export default withRouter(App)
