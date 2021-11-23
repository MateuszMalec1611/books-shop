import { cartItemGenerator } from 'src/mocks/cart';
import CartReducer, { defaultState } from '../Cart.reducer';
import { AddToCart, CartActionTypes, RemoveCartItem } from '../Cart.types';

const addToCartAction: AddToCart = {
    type: CartActionTypes.ADD_TO_CART,
    payload: cartItemGenerator(),
};

const addToCartAction2: AddToCart = {
    type: CartActionTypes.ADD_TO_CART,
    payload: cartItemGenerator({ id: 1 }),
};

const removeFromCartAction: RemoveCartItem = {
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: cartItemGenerator(),
};

const removeFromCartAction2: RemoveCartItem = {
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: cartItemGenerator({ quantity: 2 }),
};

const stateWithCartItem = {
    ...defaultState,
    cart: [addToCartAction.payload],
    totalAmount: addToCartAction.payload.price,
    totalQuantity: addToCartAction.payload.quantity,
};

describe('cart reducer', () => {
    it('should return the initial state', () => {
        expect(CartReducer(defaultState, undefined)).toEqual(defaultState);
    });

    it('should add item to cart', () => {
        expect(CartReducer(defaultState, addToCartAction)).toEqual(stateWithCartItem);
    });

    it('should add second item to cart', () => {
        expect(CartReducer(stateWithCartItem, addToCartAction2)).toEqual({
            ...stateWithCartItem,
            cart: [...stateWithCartItem.cart, addToCartAction2.payload],
            totalAmount: stateWithCartItem.totalAmount + addToCartAction2.payload.price,
            totalQuantity: stateWithCartItem.totalQuantity + addToCartAction2.payload.quantity,
        });
    });

    it('should increase cart item quantity', () => {
        expect(CartReducer(stateWithCartItem, addToCartAction)).toEqual({
            ...stateWithCartItem,
            cart: [
                ...stateWithCartItem.cart.map(item => {
                    if (item.id === addToCartAction.payload.id)
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    return item;
                }),
            ],
            totalAmount: stateWithCartItem.totalAmount + addToCartAction.payload.price,
            totalQuantity: stateWithCartItem.totalQuantity + 1,
        });
    });

    it('should remove item from cart', () => {
        expect(CartReducer(stateWithCartItem, removeFromCartAction)).toEqual({
            ...stateWithCartItem,
            cart: [
                ...stateWithCartItem.cart.filter(
                    item => item.id !== removeFromCartAction.payload.id
                ),
            ],
            totalAmount: stateWithCartItem.totalAmount - removeFromCartAction.payload.price,
            totalQuantity: stateWithCartItem.totalQuantity - 1,
        });
    });

    it('should decrease item quantity', () => {
        expect(CartReducer(stateWithCartItem, removeFromCartAction2)).toEqual({
            ...stateWithCartItem,
            cart: [
                ...stateWithCartItem.cart.map(item => {
                    if (item.id === addToCartAction.payload.id)
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    return item;
                }),
            ],
            totalAmount: stateWithCartItem.totalAmount - removeFromCartAction.payload.price,
            totalQuantity: stateWithCartItem.totalQuantity - 1,
        });
    });
});
