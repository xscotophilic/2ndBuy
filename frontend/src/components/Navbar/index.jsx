import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

class Header extends Component {
  getBackendUrl(path) {
    const base = import.meta.env.BASE_API_URL || 'http://localhost:4000';
    return base.replace(/\/$/, '') + path;
  }
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return (
          <Button color="inherit" href={this.getBackendUrl('/auth/google')}>
            Login With Google
          </Button>
        );
      default:
        return (
          <Fragment>
            <Button color="inherit" component={Link} to="/dashboard">
              Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/books/new">
              Add Book
            </Button>
            <Button color="inherit" href={this.getBackendUrl('/api/logout')}>
              Logout
            </Button>
          </Fragment>
        );
    }
  }

  render() {
    return (
      <AppBar position="static" color="primary" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
          >
            2ndBuy
          </Typography>
          <Box>{this.renderContent()}</Box>
        </Toolbar>
      </AppBar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
