import { Image, Button } from 'react-bootstrap';
import { CartItem as CartItemType } from 'src/store/CartStore/Cart.types';
import * as S from './styles';

interface CartItemProps {
    cartItem: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
    return (
        <S.CartItemBox>
            <S.ImageBox>
                <Image src={cartItem.cover_url} thumbnail />
            </S.ImageBox>
            <S.ContentBox>
                <h2>{cartItem.title}</h2>
                <S.ButtonsBox>
                    <Button variant="danger">-</Button>
                    <div>
                        <p>ilość </p>
                        <p>{cartItem.quantity}</p>
                    </div>
                    <Button variant="success">+</Button>
                </S.ButtonsBox>
            </S.ContentBox>
        </S.CartItemBox>
    );
};

export default CartItem;
