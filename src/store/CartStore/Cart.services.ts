import api from 'src/api';
import { Order } from './Cart.types';

export const sendOrder = async (order: Order) => await api().post(`order`, order);
