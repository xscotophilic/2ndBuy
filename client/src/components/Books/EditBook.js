import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { fetchBookById, editBook } from '../../actions';

class DeleteBook extends Component {
  state = {
    name: '',
    price: '',
    picurl: '',
    location: '',
    email: '',
  };

  async componentDidMount() {
    await this.props.fetchBookById(this.props.match.params.id);
    this.setState({
      name: this.props.fetchBookByIdData.name,
      price: this.props.fetchBookByIdData.price,
      picurl: this.props.fetchBookByIdData.picurl,
      location: this.props.fetchBookByIdData.location,
      email: this.props.fetchBookByIdData.email,
    });
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: '30px' }}>
          <h5>Edit Book Details</h5>
          <form
            autoComplete='off'
            onSubmit={this.props.handleSubmit((e) =>
              this.props.editBook({ ...e, id: this.props.match.params.id })
            )}
          >
            <Field
              name='name'
              component='input'
              type='text'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder={this.state.name}
              required
            />
            <label>Name</label>
            <Field
              name='price'
              component='input'
              type='number'
              onChange={(e) => this.setState({ price: e.target.value })}
              value={this.state.price}
              placeholder={this.state.price}
              required
            />
            <label>Price</label>
            <Field
              name='picurl'
              component='input'
              type='text'
              onChange={(e) => this.setState({ picurl: e.target.value })}
              value={this.state.picurl}
              placeholder={this.state.picurl}
              required
            />
            <label>URL of Picture</label>
            <Field
              name='location'
              component='input'
              type='text'
              onChange={(e) => this.setState({ location: e.target.value })}
              value={this.state.location}
              placeholder={this.state.location}
              required
            />
            <label>Location</label>
            <Field
              name='email'
              component='input'
              type='email'
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
              placeholder={this.state.email}
              required
            />
            <label>Your Email</label>
            <br />
            <br />
            <Link to='/dashboard' className='btn-flat green white-text'>
              <i className='material-icons left'>close</i>
              Cancel
            </Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button className='btn-flat red white-text' type='submit'>
              Submit
              <i className='material-icons right'>done</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fetchBookByIdData }) => {
  return { fetchBookByIdData };
};

const wrappededitForm = connect(mapStateToProps, { fetchBookById, editBook })(
  DeleteBook
);

export default reduxForm({
  form: 'editForm',
})(wrappededitForm);
