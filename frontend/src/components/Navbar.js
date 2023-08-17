import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button  from 'react-bootstrap/Button';


function Navtop() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Pixie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          {user && (
            <Nav>
              <Nav.Link href="/publish">Publish</Nav.Link>
              <Nav.Link href="/downloadbooks">Buy books</Nav.Link>
              <Button variant='dark' onClick={handleClick}>Log out</Button>
            </Nav>
          )}
          {!user && (
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
            </Nav>
          )}
  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navtop;


/*import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Pixie</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <Link to="/publish">Publish</Link>
              <Link to="/downloadbooks">Buy books</Link>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
*/