import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Publish from "./pages/Publish";
import Navtop from "./components/Navbar";
import Downloadbooks from "./pages/Downloadbooks";
import About from "./pages/About";
import Footer from "./components/Footer";
import { Box, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const { user } = useAuthContext();

  return (
    <Box
      className="App"
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <BrowserRouter>
        <Navtop />

        <Box
          className="pages"
          sx={{ display: "flex", flexFlow: "column", height: "100%" }}
        >
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />

            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />

            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />

            <Route
              //changed user to !user since I don't have an account at the moment
              path="/publish"
              element={!user ? <Publish /> : <Navigate to="/Publish.js" />}
            ></Route>

            <Route
              path="/downloadbooks"
              element={
                user ? <Downloadbooks /> : <Navigate to="/Downloadbooks.js" />
              }
            ></Route>

            <Route
              path="/about"
              element={user ? <About /> : <Navigate to="/About.js" />}
            ></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
