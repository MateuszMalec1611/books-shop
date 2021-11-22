import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Layout: React.FC = ({ children }) => {
    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div>
            <Navigation />
            <Container>{children}</Container>
        </div>
    );
};

export default Layout;
