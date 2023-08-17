import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row"


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <Container>
      <h3>Sign Up</h3>
      <Form onSubmit={handleSubmit}>
      
      <Col xs="auto">
       
        <Form.Label>Email address:</Form.Label>
      <Form.Control 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      </Col>
      
      <Col xs="auto">
          <Form.Label>Password:</Form.Label>
      <Form.Control 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        
      />
      </Col>
      
      
      <Button variant='primary' disabled={isLoading}>Sign up</Button>
      {error && <div className="error">{error}</div>}
      
      
      

      
    </Form>
    </Container>
    
  )
}

export default Signup