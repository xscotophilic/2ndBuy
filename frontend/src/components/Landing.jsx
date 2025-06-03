import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

class Landing extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBooks = () => {
    return this.props.books.map((book) => (
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
          </CardContent>
          <CardActions sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="body2" color="text.secondary">
              Owner's contact:
            </Typography>
            <Link href={`mailto:${book.email}`}>{book.email}</Link>
          </CardActions>
        </Card>
      </Grid>
    ));
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>2ndBuy!</Typography>
        <Typography gutterBottom>A place where you can buy and sell books.</Typography>
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {this.renderBooks()}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books || [],
});

export default connect(mapStateToProps, { fetchBooks })(Landing);
