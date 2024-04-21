import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Character } from '../../types/charactersTypes';
import './characterListItem.modules.scss';

export const CharacterListItem = ({ character }: { character: Character }) => {
  return (
    <Card
      className="card__wrapper"
      sx={{ width: '300px', background: '#ff4545' }}
    >
      <CardActionArea
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ color: 'white' }}
            component="div"
          >
            {character.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
