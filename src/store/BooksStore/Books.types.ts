import { ThunkAction } from 'redux-thunk';

export interface BooksState {
    books?: Books;
}

export interface SetBooks {
    type: typeof BooksActionTypes.SET_BOOKS;
    payload: { booksList: Book[]; metadata: Metadata };
}

export type BooksDispatchTypes = SetBooks;

export type FetchBooksAction = () => ThunkAction<void, BooksState, {}, SetBooks>;

export type Books = {
    booksList: { [key: number]: Book[] };
    metadata: Metadata;
};

export type Book = {
    id: number;
    title: string;
    author: string;
    cover_url: string;
    pages: number;
    price: number;
    currency: string;
};

export type Metadata = {
    page: number;
    records_per_page: number;
    total_records: number;
};

export enum BooksActionTypes {
    SET_BOOKS = 'SET_BOOKS',
}
