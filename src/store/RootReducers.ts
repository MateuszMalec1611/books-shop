import { combineReducers } from 'redux';
import BooksReducer from './BooksStore/Books.reducer';
import CartReducer from './CartStore/Cart.reducer';

const rootReducer = combineReducers({ booksStore: BooksReducer, cartStore: CartReducer });

export default rootReducer;
