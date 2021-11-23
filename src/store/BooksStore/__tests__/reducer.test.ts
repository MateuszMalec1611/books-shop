import { bookGenerator, metadataGenerator } from 'src/mocks/books';
import BooksReducer, { defaultState } from '../Books.reducer';
import { BooksActionTypes, SetBooks } from '../Books.types';

const setBooksAction: SetBooks = {
    type: BooksActionTypes.SET_BOOKS,
    payload: {
        booksList: [bookGenerator(), bookGenerator({ title: 'test1' })],
        metadata: metadataGenerator(),
    },
};

const setBooksActionPage2: SetBooks = {
    type: BooksActionTypes.SET_BOOKS,
    payload: {
        booksList: [bookGenerator(), bookGenerator({ title: 'test2' })],
        metadata: metadataGenerator({ page: 2 }),
    },
};

const stateWithBooks = {
    ...defaultState,
    books: {
        metadata: setBooksAction.payload.metadata,
        booksList: {
            [setBooksAction.payload.metadata.page]: setBooksAction.payload.booksList,
        },
    },
};

describe('books reducer', () => {
    it('should return the initial state', () => {
        expect(BooksReducer(defaultState, undefined)).toEqual(defaultState);
    });

    it('should add two books to state', () => {
        expect(BooksReducer(defaultState, setBooksAction)).toEqual(stateWithBooks);
    });

    it('should books from 2 page to state with books', () => {
        expect(BooksReducer(stateWithBooks, setBooksActionPage2)).toEqual({
            ...stateWithBooks,
            books: {
                metadata: setBooksActionPage2.payload.metadata,
                booksList: {
                    ...stateWithBooks.books.booksList,
                    [setBooksActionPage2.payload.metadata.page]:
                        setBooksActionPage2.payload.booksList,
                },
            },
        });
    });
});
