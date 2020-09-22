import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import MoviesTable from './MoviesTable';
import Navigation from './Navigation';

function App(props) {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route isLoggedIn={props.token} path="/" exact={true} component={MoviesTable} />
        <Route path="/login" exact={true} component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
