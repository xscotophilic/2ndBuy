import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMyBooks } from '../../actions';

class Landing extends Component {
  componentDidMount() {
    this.props.fetchMyBooks();
  }

  renderBooks = () => {
    return this.props.mybooks.map((book) => {
      return (
        <div key={book._id}>
          <div className='col s12 m4'>
            <div className='card'>
              <div className='card-image'>
                <img alt='test' src={book.picurl} width='100%' height='170px' />
              </div>
              <div className='card-content' style={{ textAlign: 'left' }}>
                <h5>{book.name}</h5>
                <h6>price: {book.price}</h6>
                <h6>Location: {book.location}</h6>
              </div>
              <div className='card-action' style={{ textAlign: 'left' }}>
                Owner's contact:
                <br />
                <a href={`mailto:${book.email}`}>{book.email}</a>
              </div>
              <div className='row'>
                <div className='card-action col s12'>
                  <Link
                    to={`/books/edit/${book._id}`}
                    className='btn-flat col s12 blue white-text'
                  >
                    <i className='material-icons left'>edit</i>
                    Edit
                  </Link>
                  <br />
                  <br />
                  <Link
                    to={`/books/delete/${book._id}`}
                    className='btn-flat col s12 red white-text'
                  >
                    <i className='material-icons left'>delete</i>
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h4>Your Books!</h4>
        <div className='row' style={{ marginTop: '20px' }}>
          {this.renderBooks()}
        </div>
        <div className='fixed-action-btn'>
          <Link to='/books/new' className='btn-floating btn-large red'>
            <i className='large material-icons'>add</i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mybooks }) => {
  return { mybooks };
};

export default connect(mapStateToProps, { fetchMyBooks })(Landing);
