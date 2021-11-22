import { Routes, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import OrderForm from './pages/OrderForm/OrderForm';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/ordering" element={<OrderForm />} />
            </Routes>
        </Layout>
    );
};

export default App;
