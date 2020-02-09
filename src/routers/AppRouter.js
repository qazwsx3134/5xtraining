import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink,useParams } from 'react-router-dom';
import Nav from "../components/nav/Nav";
import Index from '../pages/Index';
import Contact from '../pages/Contact';
import Posts from '../pages/Posts';
import Space from '../pages/Space';
import Talks from '../pages/Talks';
import Training from '../pages/Training';
import NotFound from '../pages/NotFound';


const AppRouter = () => {

  
  return(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact={true} />
        <Route path="/contacts" component={Contact} exact={true} />
        <Route path="/posts" component={Posts} exact={true} />
        <Route path="/space" component={Space} exact={true} />
        <Route path="/talks" component={Talks} exact={true} />
        <Route path="/training" component={Training} exact={true} />
        <Route path="/" component={NotFound} />
      </Switch>
  </BrowserRouter>
)};

export default AppRouter;
