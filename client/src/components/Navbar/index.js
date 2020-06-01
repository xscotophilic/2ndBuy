import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login With Google</a>
          </li>
        );
      default:
        return (
          <Fragment>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/books/new'>Add Book</Link>
            </li>
            <li>
              <a href='/api/logout'>Logout</a>
            </li>
          </Fragment>
        );
    }
  }

  render() {
    return (
      <header>
        <div className='ui container'>
          <Link to='/' className='left brand-logo'>
            2ndBuy
          </Link>
          <input id='nav' type='checkbox' />
          <label htmlFor='nav'></label>
          <nav style={{ backgroundColor: 'transparent' }}>
            <ul>{this.renderContent()}</ul>
          </nav>
        </div>
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
