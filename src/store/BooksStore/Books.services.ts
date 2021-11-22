import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import api from 'src/api';
import {
    Book,
    BooksActionTypes,
    BooksDispatchTypes,
    FetchBooksAction,
    Metadata,
} from './Books.types';

export const fetchBooks: FetchBooksAction =
    (page: number) => async (dispatch: Dispatch<BooksDispatchTypes>) => {
        try {
            dispatch({ type: BooksActionTypes.SET_LOADING, payload: true });
            const { data }: AxiosResponse<{ data: Book[]; metadata: Metadata }> = await api().get(
                `book?page=${page}`
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
