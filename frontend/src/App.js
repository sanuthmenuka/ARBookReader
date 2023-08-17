import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Publish from './pages/Publish'
import Navtop from './components/Navbar'
import Downloadbooks from './pages/Downloadbooks'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navtop />
        <div className="pages">
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
              path="/publish" element=<Publish/>>
            </Route>

            <Route
            path="/downloadbooks" element=<Downloadbooks/>>

            </Route>
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;