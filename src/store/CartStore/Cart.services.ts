import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import api from 'src/api';
import { Book } from '../BooksStore/Books.types';
import { CartActionTypes } from './Cart.types';

export const updateStore = (book: Book, quantity: number) => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: {
        book,
        quantity,
    },
});
