import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Navbary() {
return(
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GerencIA</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Funcionalidade</Nav.Link>
            <Nav.Link href="#features">Preço</Nav.Link>
            <Nav.Link href="#pricing">Contato   </Nav.Link>
            <Button variant="light">Acessar</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
)
}

export default Navbary