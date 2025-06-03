import { Component } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { fetchMyBooks } from '../../actions';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchMyBooks();
  }

  renderBooks = () => {
    return this.props.mybooks.map((book) => (
      <Grid item xs={12} md={4} key={book._id}>
        <Card>
          <CardMedia
            component="img"
            height="170"
            image={book.picurl}
            alt={book.name}
          />
          <CardContent>
            <Typography variant="h5">{book.name}</Typography>
            <Typography variant="subtitle1">Price: {book.price}</Typography>
            <Typography variant="subtitle2">Location: {book.location}</Typography>
            <Typography variant="body2" color="text.secondary">
              Owner's contact:
            </Typography>
            <Typography variant="body2">
              <a href={`mailto:${book.email}`}>{book.email}</a>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              component={RouterLink}
              to={`/books/edit/${book._id}`}
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              sx={{ mr: 1 }}
            >
              Edit
            </Button>
            <Button
              component={RouterLink}
              to={`/books/delete/${book._id}`}
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  };

  render() {
    return (
      <Box sx={{ textAlign: 'center', position: 'relative' }}>
        <Typography variant="h4" gutterBottom>Your Books!</Typography>
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {this.renderBooks()}
        </Grid>
        <Button
          component={RouterLink}
          to="/books/new"
          variant="contained"
          color="error"
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            borderRadius: '50%',
            minWidth: 0,
            width: 56,
            height: 56,
            boxShadow: 3,
            zIndex: 1000,
          }}
        >
          <AddIcon fontSize="large" />
        </Button>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  mybooks: state.mybooks || [],
});

export default connect(mapStateToProps, { fetchMyBooks })(Dashboard);
