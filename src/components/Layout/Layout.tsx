import { Container } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Navigation />
            <Container>{children}</Container>
        </div>
    );
};

export default Layout;
