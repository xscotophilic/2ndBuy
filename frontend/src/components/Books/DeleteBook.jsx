import { useDispatch } from 'react-redux';
import { useNavigate, useParams, Link as RouterLink } from 'react-router-dom';
import { deleteBook } from '../../actions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DeleteBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    await dispatch(deleteBook(id));
    navigate('/dashboard');
  };

  return (
    <Box sx={{ marginTop: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>Are you sure you want to delete this book?</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
        <Button component={RouterLink} to="/dashboard" variant="outlined" color="primary">
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default DeleteBook;
