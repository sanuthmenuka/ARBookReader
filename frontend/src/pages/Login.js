import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  
  const handleSubmit = async (e) => {
    
    e.preventDefault()
    
    await login(email, password)
  }

  return (
    <Container>
    <Form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <Form.Group className="lg-1"> 
      <Form.Label>Email address:</Form.Label>
      <Form.Control
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      </Form.Group>
     
     <Form.Group className="lg-1"> 
      <Form.Label>Password:</Form.Label>
      <Form.Control
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
     </Form.Group>
      

      <Button type="submit" disabled={isLoading}>Log in</Button>
      {error && <div className="error">{error}</div>}
    </Form>
    </Container>
    
  )
}

export default Login