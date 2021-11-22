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
    () => async (dispatch: Dispatch<BooksDispatchTypes>) => {
        try {
            const { data }: AxiosResponse<{ data: Book[]; metadata: Metadata }> = await api().get(
                'book'
            );

            dispatch({
                type: BooksActionTypes.SET_BOOKS,
                payload: { booksList: data.data, metadata: data.metadata },
            });
        } catch (err: any) {
            console.log(err);
        }
    };
