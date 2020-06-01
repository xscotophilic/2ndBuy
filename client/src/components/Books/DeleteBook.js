import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteBook } from '../../actions';

class DeleteBook extends Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.deleteBook(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h4>Are you sure you want to delete this book?</h4>
          <Link to='/dashboard' className='btn-flat green white-text'>
            <i className='material-icons left'>close</i>
            Cancel
          </Link>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <button
            className='btn-flat red white-text'
            onClick={(e) => this.onSubmit(e)}
          >
            Submit
            <i className='material-icons right'>done</i>
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteBook })(DeleteBook);
