import { Image, Button } from 'react-bootstrap';
import { useAppDispatch } from 'src/hooks/useAppStore';
import { addToCart, removeCartItem } from 'src/store/CartStore/Cart.services';
import { CartItem as CartItemType } from 'src/store/CartStore/Cart.types';
import * as S from './styles';

interface CartItemProps {
    cartItem: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
    const dispatch = useAppDispatch();

    const handleAddToCart = () => dispatch(addToCart(cartItem));
    const handleRemoveItem = () => dispatch(removeCartItem({ ...cartItem, quantity: 1 }));

    return (
        <S.CartItemBox>
            <S.ImageBox>
                <Image src={cartItem.cover_url} thumbnail />
            </S.ImageBox>
            <S.ContentBox>
                <h2>{cartItem.title}</h2>
                <S.ButtonsBox>
                    <Button onClick={handleRemoveItem} variant="danger">
                        -
                    </Button>
                    <div>
                        <p>ilość </p>
                        <p>{cartItem.quantity}</p>
                    </div>
                    <Button onClick={handleAddToCart} variant="success">
                        +
                    </Button>
                </S.ButtonsBox>
            </S.ContentBox>
        </S.CartItemBox>
    );
};

export default CartItem;
