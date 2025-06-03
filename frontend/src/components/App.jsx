import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './Navbar/index.jsx';
import Landing from './Landing.jsx';
import NewBook from './Books/NewBook.jsx';
import Dashboard from './Dashboard/index.jsx';
import DeleteBook from './Books/DeleteBook.jsx';
import EditBook from './Books/EditBook.jsx';
import * as actions from '../actions';

// If using JSX, Vite requires the file extension to be .jsx or .tsx.
// This file should be renamed to App.jsx for Vite compatibility.

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <div className='container'>
              <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/books/delete/:id' element={<DeleteBook />} />
                <Route path='/books/edit/:id' element={<EditBook />} />
                <Route path='/books/new' element={<NewBook />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
