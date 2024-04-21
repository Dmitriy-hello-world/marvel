import { useSelector } from 'react-redux';
import { selectModalInfo } from './customModalSelectors';
import { useAppDispatch } from '../../app/store';
import { setOpen } from './customModalSlice';
import {
  Card,
  CardContent,
  Grid,
  CardMedia,
  IconButton,
  Chip,
  Divider,
  Typography,
  Box,
  Modal,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '600px',
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'white',
  boxShadow: 24,
  borderRadius: 8,
  p: 2,
  scrollbarWidth: 'thin',
  scrollbarColor: 'rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1)',
};

const comicsStyle = {
  padding: '8px 0',
};

export const CustomModal = () => {
  const dispatch = useAppDispatch();
  const { open, character } = useSelector(selectModalInfo);
  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Card>
          <CardContent>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sx={{ textAlign: 'right' }}>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <CardMedia
                  component="img"
                  height="500"
                  image={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
                  alt={character?.name}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" component="h2" align="center">
                  {character?.name || 'No name'}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p">
                  {character?.description || 'No description available'}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Modified:{' '}
                  {character && new Date(character.modified).toLocaleString()}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Comics:
                </Typography>
                <Divider />
                <Box sx={comicsStyle}>
                  <Grid container spacing={1}>
                    {character?.comics.items.map((comic, index) => (
                      <Grid item key={index}>
                        <Chip label={comic.name} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};
