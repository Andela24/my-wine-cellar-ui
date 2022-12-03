import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Wine Celler</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="users">Users</Nav.Link>
            <Nav.Link href="wineries">Wineries</Nav.Link>
            <Nav.Link href="bottles">Bottles</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
