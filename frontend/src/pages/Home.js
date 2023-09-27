import { Box} from "@mui/material";
import ImageOverlayHome from "../components/ImageOverlayHome";
import HomeExplorationGrid from "../components/homeExplorationGrid";
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
     
    </Box>
  );
};

export default Home;
