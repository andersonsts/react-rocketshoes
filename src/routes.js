import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Teste from './pages/Teste';
import Grid from './components/GridPlaceholder';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/teste" component={Teste} />
      <Route path="/loading" component={Grid} />
    </Switch>
  );
}
