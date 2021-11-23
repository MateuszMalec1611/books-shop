export interface BooksState {
    books?: Books;
    loading: boolean;
}

export interface SetBooks {
    type: BooksActionTypes.SET_BOOKS;
    payload: { booksList: Book[]; metadata: Metadata };
}
export interface SetLoading {
    type: BooksActionTypes.SET_LOADING;
    payload?: boolean;
}

export type BooksDispatchTypes = SetBooks | SetLoading;

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
    SET_LOADING = 'SET_LOADING',
}
