import React from 'react';
import { Route } from 'react-router';

import PokemonContainer from './containers/PokemonContainer';

let routes = (
  <Route exact path="/">
    <Route path="/pokemon" component={PokemonContainer} />
  </Route>
);

export default routes;
