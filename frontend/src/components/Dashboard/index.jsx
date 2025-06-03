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
      <Grid item xs={12} sm={6} md={4} key={book._id}>
        <Card sx={{ height: 390, display: 'flex', flexDirection: 'column', maxWidth: 340, mx: 'auto' }}>
          <CardMedia
            component="img"
            image={book.picurl}
            alt={book.name}
            sx={{
              height: 220,
              width: '100%',
              objectFit: 'contain',
              aspectRatio: '3/4',
              background: '#f5f5f5',
              display: 'block',
            }}
          />
          <CardContent sx={{ flexGrow: 1, textAlign: 'left', minHeight: 120 }}>
            <Typography variant="h5" noWrap title={book.name} sx={{ maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{book.name}</Typography>
            <Typography variant="subtitle1" noWrap>Price: {book.price}</Typography>
            <Typography variant="subtitle2" noWrap>Location: {book.location}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
              <Typography variant="body2" color="text.secondary" noWrap>Owner's contact:</Typography>
              <Typography variant="body2" sx={{ maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                <a href={`mailto:${book.email}`}>{book.email}</a>
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ mt: 0, justifyContent: 'flex-start', flexShrink: 0 }}>
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
