import { CartActionTypes, CartDispatchTypes, CartItem, CartState } from './Cart.types';

const defaultState: CartState = {
    cart: [],
    totalAmount: 0,
    totalQuantity: 0,
    loading: false,
    error: undefined,
    onSuccess: undefined,
};

const CartReducer = (
    state: CartState = defaultState,
    action: CartDispatchTypes
): typeof defaultState => {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            const updatedTotalAmount = state.totalAmount + action.payload.price;
            const updatedTotalQuantity = state.totalQuantity + 1;

            const existingCartItemIndex = state.cart.findIndex(
                item => item.id === action.payload.id
            );
            const existingCartItem = state.cart[existingCartItemIndex];
            let updatedCart: CartItem[] = [];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
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
                totalQuantity: updatedTotalQuantity,
            };

        case CartActionTypes.REMOVE_CART_ITEM:
            const updatedCartTotalAmount = state.totalAmount - action.payload.price;
            const updatedCartTotalQuantity = state.totalQuantity - 1;

            const existingCartItemToRemoveIndex = state.cart.findIndex(
                item => item.id === action.payload.id
            );
            const existingCartItemToRemove = state.cart[existingCartItemToRemoveIndex];
            let updatedNewCart: CartItem[] = [];

            if (existingCartItemToRemove.quantity === 1) {
                updatedNewCart = state.cart.filter(item => item.id !== action.payload.id);
            } else {
                const updatedItem = {
                    ...existingCartItemToRemove,
                    quantity: existingCartItemToRemove.quantity - 1,
                };
                updatedNewCart = [...state.cart];
                updatedNewCart[existingCartItemToRemoveIndex] = updatedItem;
            }

            return {
                ...state,
                cart: updatedNewCart,
                totalAmount: updatedCartTotalAmount,
                totalQuantity: updatedCartTotalQuantity,
            };

        case CartActionTypes.HANDLE_ORDER:
            return { ...state, cart: [], totalAmount: 0 };

        case CartActionTypes.SET_LOADING:
            return { ...state, loading: action.payload ?? false };
        case CartActionTypes.SET_CART_ERROR:
            return { ...state, error: action.payload ?? undefined };
        case CartActionTypes.SET_ON_SUCCESS:
            return { ...state, onSuccess: action.payload ?? undefined };

        default:
            return state;
    }
};

export default CartReducer;
