import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addBook } from '../../actions/index';

class SurveyForm extends Component {
  render() {
    return (
      <div style={{ paddingTop: '20px' }}>
        <h5>Fill in the details of Book.</h5>
        <br />
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
          <br />
          <br />
          <Link to='/dashboard' className='btn-flat red white-text'>
            <i className='material-icons left'>close</i>
            Cancel
          </Link>
          <button className='btn-flat right blue white-text' type='submit'>
            Submit
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    );
  }
}

const wrappedSurveyForm = connect(null, {
  addBook,
})(SurveyForm);

export default reduxForm({
  form: 'surveyForm',
})(wrappedSurveyForm);
