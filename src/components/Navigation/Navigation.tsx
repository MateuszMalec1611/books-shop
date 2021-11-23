import { Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAppSelector } from 'src/hooks/useAppStore';
import * as S from './styles';

const Navigation = () => {
    let navigate = useNavigate();
    const totalQuantity = useAppSelector(state => state.cartStore.totalQuantity);

    const handleRedirect = () => navigate('/', { replace: false });

    return (
        <Navbar bg="dark" expand="sm" variant="dark">
            <S.Container>
                <Navbar.Brand onClick={handleRedirect} className="text-light">
                    Books Shop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <S.Link to="/">Home</S.Link>
                        <S.Link to="/cart">
                            Koszyk
                            {!!totalQuantity && (
                                <S.CartItemsQuantity>
                                    <p>{totalQuantity}</p>
                                </S.CartItemsQuantity>
                            )}
                        </S.Link>
                    </Nav>
                </Navbar.Collapse>
            </S.Container>
        </Navbar>
    );
};

export default Navigation;
