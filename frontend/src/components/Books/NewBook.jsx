import { useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBook } from '../../actions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

const NewBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    await dispatch(addBook(data));
    navigate('/dashboard');
  };

  return (
    <Box sx={{ paddingTop: 3 }}>
      <Typography variant="h5" gutterBottom>Fill in the details of Book.</Typography>
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
            color="error"
            startIcon={<CloseIcon />}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<DoneIcon />}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default NewBook;
