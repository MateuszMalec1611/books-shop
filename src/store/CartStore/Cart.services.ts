import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import api from 'src/api';
import { Book } from '../BooksStore/Books.types';
import { CartActionTypes, CartItem } from './Cart.types';

export const addToCart = (cartItem: CartItem) => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: cartItem,
});
