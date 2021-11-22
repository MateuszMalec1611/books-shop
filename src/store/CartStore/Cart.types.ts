import { Book } from '../BooksStore/Books.types';

export interface CartState {
    cart: Cart[] | [];
    totalAmount: number;
}

export type Cart = {
    book: Book;
    quantity: number;
};

export type CartDispatchTypes = AddToCart;

export interface AddToCart {
    type: typeof CartActionTypes.ADD_TO_CART;
    payload: { book: Book; quantity: number };
}

export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
}
