import { useForm } from 'react-hook-form';
import { Link as RouterLink, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookById, editBook } from '../../actions';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

const EditBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const book = useSelector((state) => state.fetchBookByIdData);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (book) {
      setValue('name', book.name || '');
      setValue('price', book.price || '');
      setValue('picurl', book.picurl || '');
      setValue('location', book.location || '');
      setValue('email', book.email || '');
    }
  }, [book, setValue]);

  const onSubmit = async (data) => {
    await dispatch(editBook({ ...data, id }));
    navigate('/dashboard');
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>Edit Book Details</Typography>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('name', { required: true })}
          label="Name"
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name && 'Name is required'}
        />
        <TextField
          {...register('price', { required: true })}
          label="Price"
          type="number"
          fullWidth
          margin="normal"
          error={!!errors.price}
          helperText={errors.price && 'Price is required'}
        />
        <TextField
          {...register('picurl', { required: true })}
          label="URL of Picture"
          fullWidth
          margin="normal"
          error={!!errors.picurl}
          helperText={errors.picurl && 'Picture URL is required'}
        />
        <TextField
          {...register('location', { required: true })}
          label="Location"
          fullWidth
          margin="normal"
          error={!!errors.location}
          helperText={errors.location && 'Location is required'}
        />
        <TextField
          {...register('email', { required: true })}
          label="Your Email"
          type="email"
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email && 'Email is required'}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            component={RouterLink}
            to="/dashboard"
            variant="outlined"
            color="success"
            startIcon={<CloseIcon />}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="error"
            endIcon={<DoneIcon />}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditBook;
