import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { fetchBooks } from './Books.services';
import {
    Book,
    BooksActionTypes,
    BooksDispatchTypes,
    BooksState,
    Metadata,
    SetBooks,
} from './Books.types';

export type SetBooksAction = (page: number) => ThunkAction<void, BooksState, {}, SetBooks>;

export const setBooks: SetBooksAction =
    (page: number) => async (dispatch: Dispatch<BooksDispatchTypes>) => {
        try {
            dispatch({ type: BooksActionTypes.SET_LOADING, payload: true });
            const { data }: AxiosResponse<{ data: Book[]; metadata: Metadata }> = await fetchBooks(
                page
            );

            dispatch({
                type: BooksActionTypes.SET_BOOKS,
                payload: { booksList: data.data, metadata: data.metadata },
            });
        } catch (err: any) {
            console.log(err);
        } finally {
            dispatch({ type: BooksActionTypes.SET_LOADING });
        }
    };
