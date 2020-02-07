import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink,useParams } from 'react-router-dom';
import Nav from "../components/nav/Nav";
import Index from '../pages/Index';


const AppRouter = () => {

  
  return(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact={true} />
      </Switch>
  </BrowserRouter>
)};

export default AppRouter;
