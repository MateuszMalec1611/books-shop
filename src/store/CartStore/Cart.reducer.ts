import { CartActionTypes, CartDispatchTypes, CartItem, CartState } from './Cart.types';

export const defaultState: CartState = {
    cart: [],
    totalAmount: 0,
    totalQuantity: 0,
    loading: false,
    error: undefined,
    onSuccess: undefined,
};

export const CartReducer = (
    state: CartState = defaultState,
    action?: CartDispatchTypes
): typeof defaultState => {
    switch (action?.type) {
        case CartActionTypes.ADD_TO_CART:
            const updatedTotalAmount = state.totalAmount + action.payload.price;
            const updatedTotalQuantity = state.totalQuantity + 1;

            const itemExist = state.cart.find(item => item.id === action.payload.id);

            let updatedCart: CartItem[] = [];
            if (itemExist) {
                updatedCart = state.cart.map(item => {
                    if (item.id === action.payload.id)
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    return item;
                });
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

            let updatedNewCart: CartItem[] = [];

            if (action.payload.quantity === 1) {
                updatedNewCart = state.cart.filter(item => item.id !== action.payload.id);
            } else {
                updatedNewCart = state.cart.map(item => {
                    if (item.id === action.payload.id)
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    return item;
                });
            }

            return {
                ...state,
                cart: updatedNewCart,
                totalAmount: updatedCartTotalAmount,
                totalQuantity: updatedCartTotalQuantity,
            };

        case CartActionTypes.HANDLE_ORDER:
            return { ...state, cart: [], totalAmount: 0, totalQuantity: 0 };
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
