import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../actions/index';

class Landing extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBooks = () => {
    return this.props.books.map((book) => {
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
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h4>2ndBuy!</h4>A place where you can buy and sell books.
        <div className='row' style={{ marginTop: '20px' }}>
          {this.renderBooks()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

export default connect(mapStateToProps, { fetchBooks })(Landing);
