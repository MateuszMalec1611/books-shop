import { Cart, CartActionTypes, CartDispatchTypes, CartState } from './Cart.types';

const defaultState: CartState = {
    cart: [],
    totalAmount: 0,
};

const CartReducer = (
    state: CartState = defaultState,
    action: CartDispatchTypes
): typeof defaultState => {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            const updatedTotalAmount =
                state.totalAmount + action.payload.quantity * action.payload.book.price;

            const existingCartItemIndex = state.cart.findIndex(
                item => item.book.id === action.payload.book.id
            );
            const existingCartItem = state.cart[existingCartItemIndex];
            let updatedCart: Cart[] = [];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + action.payload.quantity,
                };
                updatedCart = [...state.cart!];
                updatedCart[existingCartItemIndex] = updatedItem;
            } else {
                updatedCart = [...state.cart, action.payload];
            }

            return {
                ...state,
                cart: updatedCart,
                totalAmount: updatedTotalAmount,
            };

        default:
            return state;
    }
};

export default CartReducer;
