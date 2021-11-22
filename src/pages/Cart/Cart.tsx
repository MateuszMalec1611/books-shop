import { useAppSelector } from 'src/hooks/useAppStore';

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
    const { cart, totalAmount } = useAppSelector(state => state.cartStore);

    console.log(cart);
    console.log(totalAmount);

    return <div>d</div>;
};

export default Cart;
