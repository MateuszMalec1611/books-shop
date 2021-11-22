import { combineReducers } from 'redux';
import BooksReducer from './BooksStore/Books.reducer';

const rootReducer = combineReducers({ booksStore: BooksReducer });

export default rootReducer;
