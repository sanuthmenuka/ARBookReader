import { Box, Button, Container, Typography } from "@mui/material";
import ImageOverlayHome from "../components/ImageOverlayHome";
import HomeExplorationGrid from "../components/homeExplorationGrid";
import Footer from "../components/Footer";
import InfoPics from "../components/homeinfopics";

const Home = () => {
  return (
    <Box
      className="home"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ height: "100%" }}
    >
      <ImageOverlayHome />
      <HomeExplorationGrid />
      <InfoPics />
      <Footer />
    </Box>
  );
};

export default Home;
