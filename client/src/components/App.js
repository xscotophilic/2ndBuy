import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import Landing from './Landing';
import NewBook from './Books/NewBook';
import Dashboard from './Dashboard';
import DeleteBook from './Books/DeleteBook';
import EditBook from './Books/EditBook';
import * as actions from '../actions';
import history from '../history';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Navbar />
            <div className='container'>
              <Route exact path='/' component={Landing} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/books/delete/:id' component={DeleteBook} />
              <Route exact path='/books/edit/:id' component={EditBook} />
              <Route exact path='/books/new' component={NewBook} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
