import { Image, Button } from 'react-bootstrap';
import { connect, InferThunkActionCreatorType } from 'react-redux';
import { addToCart, removeCartItem } from 'src/store/CartStore/Cart.services';
import {
    AddToCartAction,
    CartItem as CartItemType,
    RemoveCartItemAction,
} from 'src/store/CartStore/Cart.types';
import * as S from './styles';

interface CartItemProps {
    cartItem: CartItemType;
    addToCart: InferThunkActionCreatorType<AddToCartAction>;
    removeCartItem: InferThunkActionCreatorType<RemoveCartItemAction>;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem, addToCart, removeCartItem }) => {
    const handleAddToCart = () => addToCart(cartItem);
    const handleRemoveItem = () => removeCartItem({ ...cartItem, quantity: 1 });

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

export default connect(null, { addToCart, removeCartItem })(CartItem);
