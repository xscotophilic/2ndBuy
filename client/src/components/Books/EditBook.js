import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { deleteBook } from '../../actions';

class DeleteBook extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div>
          <form
            autoComplete='off'
            onSubmit={this.props.handleSubmit((e) => this.props.addBook(e))}
          >
            <Field name='name' component='input' type='text' required />
            <label>Name</label>
            <Field name='price' component='input' type='number' required />
            <label>Price</label>
            <Field name='picurl' component='input' type='text' required />
            <label>URL of Picture</label>
            <Field name='location' component='input' type='text' required />
            <label>Location</label>
            <Field name='email' component='input' type='email' required />
            <label>Your Email</label>
          </form>
          <br />
          <br />
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

const wrappededitForm = connect(null, { deleteBook })(DeleteBook);

export default reduxForm({
  form: 'editForm',
})(wrappededitForm);
