import CartItem from 'src/components/CartItem/CartItem';
import { useAppSelector } from 'src/hooks/useAppStore';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Alert from 'src/components/Alert/Alert';
import * as S from './styles';

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
    let navigate = useNavigate();
    const { cart, totalAmount } = useAppSelector(state => state.cartStore);

    const cartItems = cart.map(item => <CartItem key={item.id} cartItem={item} />);

    const handleRedirect = () => navigate('/ordering', { replace: false });

    return (
        <>
            {!!cartItems.length && (
                <S.CartWrapper>
                    <S.CartItemsBox>{cartItems}</S.CartItemsBox>
                    <S.SummaryBox>
                        <h2>
                            koszt: <span>{totalAmount} zł</span>
                        </h2>
                        <Button onClick={handleRedirect} variant="dark">
                            DALEJ
                        </Button>
                    </S.SummaryBox>
                </S.CartWrapper>
            )}
            {!cartItems.length && (
                <Alert space={true} variant="warning">
                    Twój koszyk jest pusty
                </Alert>
            )}
        </>
    );
};

export default Cart;
