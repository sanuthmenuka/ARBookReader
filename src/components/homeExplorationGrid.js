import {
  Grid,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  createTheme,
} from "@mui/material";
import fallinlove from "../Assets/fallinlove.jpeg";
import newdimensionoflearning from "../Assets/newdimensionoflearning.jpeg";
import succeedinclassroom from "../Assets/succeedinclassroom.jpeg";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1rem",
  [theme.breakpoints.down(400)]: {
    fontSize: "0.75rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

theme.typography.body1 = {
  fontSize: "1rem",
  [theme.breakpoints.down(500)]: {
    fontSize: "0.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};

function HomeExplorationGrid() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      sx={{ width: "90%" }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ fontWeight: "700", m: "5%" }}
      >
        Explore more than 100+ books with AR content
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          width: "95%",
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        }}
      >
        <Grid container item xs={4}>
          <Card
            sx={{
              boxShadow: "1px solid #ccc",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              pointerEvents: "none",
            }}
          >
            <CardMedia component="img" image={fallinlove} />
            <CardContent>
              <ThemeProvider theme={theme}>
                <Typography variant="h3" fontWeight="bold">
                  Fall in love with reading.
                </Typography>
                <Typography variant="body1" sx={{ mt: "2%" }}>
                  From reluctant readers to total bookworms, any kid can get
                  excited about books.
                </Typography>
              </ThemeProvider>
            </CardContent>
          </Card>
        </Grid>

        <Grid container item xs={4}>
          <Card
            sx={{
              boxShadow: "1px solid #ccc",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              pointerEvents: "none",
            }}
          >
            <CardMedia component="img" image={newdimensionoflearning} />
            <CardContent>
              <ThemeProvider theme={theme}>
                <Typography variant="h3" fontWeight="bold">
                  Grow through exploration.
                </Typography>
                <Typography variant="body1" sx={{ mt: "2%" }}>
                  They can read about the topics they love and discover new
                  ones,all while learning about the world and themselves.
                </Typography>
              </ThemeProvider>
            </CardContent>
          </Card>
        </Grid>

        <Grid container item xs={4}>
          <Card
            sx={{
              boxShadow: "1px solid #ccc",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              pointerEvents: "none",
            }}
          >
            <CardMedia component="img" image={succeedinclassroom} />

            <CardContent>
              <ThemeProvider theme={theme}>
                <Typography variant="h3" fontWeight="bold">
                  Succeed.
                </Typography>
                <Typography variant="body1" sx={{ mt: "2%" }}>
                  Our ever-expanding library and enrichment tools boost reading
                  and critical thinking skills.
                </Typography>
              </ThemeProvider>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeExplorationGrid;
