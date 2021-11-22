import { Container, Nav, Navbar } from 'react-bootstrap';
import * as S from './styles';

const Navigation = () => {
    return (
        <Navbar bg="dark" expand="sm" variant="dark">
            <Container>
                <Navbar.Brand className="text-light">Books Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <S.Link to="/">Home</S.Link>
                        <S.Link to="/cart">Cart</S.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
