import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Contact from '../pages/Contact';
import Posts from '../pages/Posts';
import Space from '../pages/Space';
import Talks from '../pages/Talks';
import Training from '../pages/Training';
import NotFound from '../pages/NotFound';


const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Index} exact />
      <Route path="/contacts" component={Contact} exact />
      <Route path="/posts" component={Posts} exact />
      <Route path="/space" component={Space} exact />
      <Route path="/talks" component={Talks} exact />
      <Route path="/training" component={Training} exact />
      <Route path="/" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
