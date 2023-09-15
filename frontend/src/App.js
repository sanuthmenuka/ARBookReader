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
import Payment from './pages/Payment'

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
            
              path="/publish" element={user ?<Publish/>:<Navigate  to="/Publish.js"/> }>
            </Route>

            <Route
            path="/downloadbooks" element={user ?<Downloadbooks/>:<Navigate  to="/Downloadbooks.js"/> }>

            </Route>


            <Route
            path="/about" element={user ?<About/>:<Navigate  to="/About.js"/> }>

            </Route>
            <Route
            path="/ar" element={user?<AR/>:<Navigate  to="/AR.js"/> }>

            </Route>
            
            <Route
            path="/pricing" element={user?<Pricing/>:<Navigate  to="/Pricing.js"/> }>

            </Route>
            
            <Route
            path="/useraccount" element={user?<UserAccount/>:<Navigate  to="/UserAccount.js"/> }>

            </Route>

            <Route
            path="/bookdetails/:id" element={user?<BookDetails/>:<Navigate  to="/BookDetails.js"/> }>

            </Route>
            <Route
            path="/payment/:id" element={user?<Payment/>:<Navigate  to="/Payment.js"/> }>

            </Route>
           
            
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;