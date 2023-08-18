import Container from 'react-bootstrap/esm/Container'
import herohome from '../Assets/herohome.jpeg'
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';

const HomeFirst = () => {
    return (  
    <Container>
         <Card className="bg-dark text-white">
      <Card.Img src={herohome} alt="Card image" />
      <Card.ImgOverlay as="div">
        <Card.Title>Thousands of books!   Unlimited Potential.</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Container>
   
    );
}
 
export default HomeFirst;