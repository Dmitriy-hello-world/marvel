import {
  Container,
  Typography,
  Link,
  Grid,
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import attractivePhoto from '../../assets/photo_2023-08-12_13-13-17.jpg';
import { features } from '../../consts/features';

export const AboutPage = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={2} mb={2}>
        <Avatar
          alt="Dmytro Nykytenko"
          src={attractivePhoto}
          sx={{ width: 200, height: 200, margin: '0 auto', marginBottom: 3 }}
        />
        <Typography variant="h3" gutterBottom>
          Dmytro Nykytenko
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Age: {new Date().getFullYear() - 2000}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Project Description:
        </Typography>
        <Typography variant="body1" gutterBottom>
          I developed a web application using TypeScript, React, Redux, React
          Router, Material-UI, and Vite, integrating the Marvel API. The
          application provides users with access to Marvel superhero
          information, comics, series, stories, and events. Through dynamic UI
          components and asynchronous Redux actions, I ensured a seamless and
          engaging user experience.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Key Features:
        </Typography>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            display: 'grid',
            gridTemplateColumns: '450px 450px',
          }}
          aria-label="contacts"
        >
          {features.map((item, index) => {
            return (
              <ListItem disablePadding key={index}>
                <ListItemButton>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Typography variant="h5" gutterBottom>
          Outcome:
        </Typography>
        <Typography variant="body1" gutterBottom>
          The project showcases my proficiency in modern web development
          technologies and my ability to create compelling user experiences. By
          leveraging TypeScript, React, Redux, React Router, Material-UI, and
          Vite, I delivered a responsive and visually appealing application that
          immerses users in the captivating world of Marvel superheroes and
          comics.
        </Typography>
        <Divider sx={{ my: 4 }} />
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Link
              href="https://github.com/Dmitriy-hello-world?tab=repositories"
              color="primary"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://www.linkedin.com/in/dmitriy-nykytenko-51538a202/"
              color="primary"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
