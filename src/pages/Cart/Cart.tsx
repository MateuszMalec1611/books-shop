import CartItem from 'src/components/CartItem/CartItem';
import { useAppSelector } from 'src/hooks/useAppStore';
import * as S from './styles';

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
    const { cart, totalAmount } = useAppSelector(state => state.cartStore);

    const cartItems = cart.map(item => <CartItem key={item.id} cartItem={item} />);

    return (
        <S.CartWrapper>
            <S.CartItemsBox>{cartItems}</S.CartItemsBox>
        </S.CartWrapper>
    );
};

export default Cart;
