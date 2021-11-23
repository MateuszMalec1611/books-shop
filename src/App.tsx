import { Routes, Route } from 'react-router';
import { Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { useAppSelector } from './hooks/useAppStore';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import OrderForm from './pages/OrderForm/OrderForm';

const App = () => {
    const cartIsNotEmpty = useAppSelector(state => state.cartStore.cart).length;
    const onSuccess = useAppSelector(state => state.cartStore.onSuccess);

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                    path="/ordering"
                    element={!!cartIsNotEmpty || onSuccess ? <OrderForm /> : <Navigate to="/" />}
                />
            </Routes>
        </Layout>
    );
};

export default App;
