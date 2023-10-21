import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Publish from './pages/Publish'
import Navtop from './components/Navbar'
import Downloadbooks from './pages/Downloadbooks'
import About from './pages/About'
import Footer from './components/Footer'
import AR from './pages/AR'
import UserAccount from './pages/UserAccount'
import BookDetails from './pages/BookDetails'
import Pricing from './pages/Pricing'
import EditProfile from './pages/Editprofile'
import PublsihRights from './pages/PublishRights'
import ReviewBooks from './pages/ReviewBooks'

function App() {
  const { user } = useAuthContext()
  let admin = false
  if(user){
    if(user.role === 'admin'){
      admin = true
    }
  }
  


  

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
            
              path="/publish" element={user  ?<Publish/>:<Navigate  to="/"/> }>
            </Route>

            <Route
            path="/downloadbooks" element={user && !admin ?<Downloadbooks/>:<Navigate  to="/"/> }>

            </Route>


            <Route
            path="/about" element={user && !admin ?<About/>:<Navigate  to="/"/> }>

            </Route>
            <Route
            path="/ar" element={user && !admin?<AR/>:<Navigate  to="/"/> }>

            </Route>
            
            <Route
            path="/pricing" element={user && !admin?<Pricing/>:<Navigate  to="/"/> }>
            </Route>
            
            <Route
            path="/useraccount" element={user?<UserAccount/>:<Navigate  to="/"/> }>
            </Route>

            <Route
            path="/bookdetails/:id" element={user && !admin?<BookDetails/>:<Navigate  to="/"/> }>

            </Route>
                        
            <Route
            path="/editprofile" element={user ?<EditProfile/>:<Navigate  to="/"/> }>
            </Route>

            <Route
            path="/publsihrights" element={user && admin?<PublsihRights/>:<Navigate  to="/"/> }>
            </Route>

            <Route
            path="/reviewbooks" element={user && admin?<ReviewBooks />:<Navigate  to="/"/> }>
            </Route>
           
            
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
