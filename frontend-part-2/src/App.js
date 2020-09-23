import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import MoviesTable from './MoviesTable';
import Navigation from './Navigation';
import ProtectedRoute from './ProtectedRoute';

function App(props) {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <ProtectedRoute isLoggedIn={props.token} path="/" exact={true} component={MoviesTable} />
        <Route path="/login" exact={true} component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(App);