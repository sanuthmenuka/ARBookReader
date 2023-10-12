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
import AR from "./pages/AR";
import UserAccount from "./pages/UserAccount";
import BookDetails from "./pages/BookDetails";
import Pricing from "./pages/Pricing";
import Payment from "./pages/Payment";
import EditProfile from "./pages/Editprofile";

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
              path="/publish"
              element={user ? <Publish /> : <Navigate to="/" />}
            ></Route>

            <Route
              path="/downloadbooks"
              element={user ? <Downloadbooks /> : <Navigate to="/" />}
            ></Route>

            <Route
              path="/about"
              element={user ? <About /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/ar"
              element={user ? <AR /> : <Navigate to="/" />}
            ></Route>

            <Route
              path="/pricing"
              element={user ? <Pricing /> : <Navigate to="/" />}
            ></Route>

            <Route
              path="/useraccount"
              element={user ? <UserAccount /> : <Navigate to="/" />}
            ></Route>

            <Route
              path="/bookdetails/:id"
              element={user ? <BookDetails /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/payment/:id"
              element={user ? <Payment /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/payment/:id"
              element={user ? <Payment /> : <Navigate to="/" />}
            ></Route>

            <Route
              path="/editprofile"
              element={user ? <EditProfile /> : <Navigate to="/" />}
            ></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
