import { createSlice } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from './hooks';

interface Connection {
  tried: boolean;
}

const initialState: Connection = {
  tried: false,
};

export const connectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    setTried: (state, action) => {
      state.tried = action.payload.tried;
    },
  },
});

export const useConnection = () => {
  const dispatch = useAppDispatch();
  const tried = useAppSelector((state) => state.connection.tried);

  const setTried = (tried: boolean) =>
    dispatch(connectionSlice.actions.setTried({ tried }));

  return { tried, setTried };
};

export default connectionSlice.reducer;
