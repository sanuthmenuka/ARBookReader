import {
  Box,
  Grid,
  Card,
  CardMedia,
  Typography,
  createTheme,
} from "@mui/material";
import personalizedexperienceforreaders from "../Assets/personalizedexperienceforreaders.jpeg";
import anyonecanbeanauthor from "../Assets/anyonecanbeanauthor.jpeg";
import newdimensionoflearning from "../Assets/newdimensionoflearning.jpeg";
import parentaldashboard from "../Assets/parentaldashboard.jpeg";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h4 = {
  fontSize: "1rem",
  [theme.breakpoints.down(400)]: {
    fontSize: "0.75rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

theme.typography.body2 = {
  fontSize: "1rem",
  [theme.breakpoints.down(500)]: {
    fontSize: "0.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};

const InfoPics = () => {
  return (
    <Box
      classname="infopics"
      display="flex"
      flexDirection="column"
      sx={{ width: "90%", mt: "10%" }}
    >
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Card sx={{ boxShadow: "none", pointerEvents: "none" }}>
            <CardMedia
              component="img"
              image={personalizedexperienceforreaders}
              sx={{ background: "white" }}
            />
          </Card>
        </Grid>
        <Grid container item xs={4} justifyContent="center">
          <ThemeProvider theme={theme}>
            <Typography
              fontWeight="bold"
              display="flex"
              alignItems="end"
              variant="h4"
              sx={{ mt: "50%" }}
            >
              Personalized experience for readers
            </Typography>
            <Typography variant="body2" sx={{ mt: "5%" }}>
              Kids can grow at their own pace with recommendations based on
              their interests and reading level.
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ mt: "15%" }}>
        <Grid container item xs={4} justifyContent="left">
          <ThemeProvider theme={theme}>
            <Typography
              fontWeight="bold"
              display="flex"
              justifyContent="flex-start"
              alignItems="end"
              variant="h4"
              sx={{ mt: "50%" }}
            >
              Anyone can be an author
            </Typography>
            <Typography variant="body2" sx={{ mt: "5%" }}>
              Publish your own interactive AR books with ease on our platform.
              Share your stories and ideas with the world and become a
              successful author today!
            </Typography>
          </ThemeProvider>
        </Grid>

        <Grid item xs={8}>
          <Card sx={{ boxShadow: "none", pointerEvents: "none" }}>
            <CardMedia
              component="img"
              image={anyonecanbeanauthor}
              sx={{ background: "white" }}
            />
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ mt: "15%" }}>
        <Grid item xs={8}>
          <Card sx={{ boxShadow: "none", pointerEvents: "none" }}>
            <CardMedia
              component="img"
              image={newdimensionoflearning}
              sx={{ background: "white" }}
            />
          </Card>
        </Grid>

        <Grid container item xs={4} justifyContent="left">
          <ThemeProvider theme={theme}>
            <Typography
              fontWeight="bold"
              display="flex"
              justifyContent="flex-start"
              alignItems="end"
              variant="h4"
              sx={{ mt: "50%" }}
            >
              New Dimension of Interactive Reading
            </Typography>
            <Typography variant="body2" sx={{ mt: "5%" }}>
              Our augmented reality feature offers a fun and interactive way for
              your child to learn. The immersive experience engages their senses
              and helps them retain information better. Give your child the gift
              of learning with our unique feature.
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ mt: "15%" }}>
        <Grid container item xs={4} justifyContent="left">
          <ThemeProvider theme={theme}>
            <Typography
              fontWeight="bold"
              display="flex"
              justifyContent="flex-start"
              alignItems="end"
              variant="h4"
              sx={{ mt: "50%" }}
            >
              Parent Dashboard
            </Typography>
            <Typography variant="body2" sx={{ mt: "5%" }}>
              Follow their reading journey, send kudos and share books you think
              they'll love.
            </Typography>
          </ThemeProvider>
        </Grid>

        <Grid item xs={8}>
          <Card sx={{ boxShadow: "none", pointerEvents: "none" }}>
            <CardMedia
              component="img"
              image={parentaldashboard}
              sx={{ background: "white" }}
            />
</Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoPics;
