import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'src/store/Store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
