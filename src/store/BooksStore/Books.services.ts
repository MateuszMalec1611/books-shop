import api from 'src/api';

export const fetchBooks = async (page: number) => await api().get(`book?page=${page}`);
