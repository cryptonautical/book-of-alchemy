import { createSlice } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from './hooks';

export enum DrawerType {
  overview = 'OVERVIEW',
}

interface SideDrawerState {
  isOpen: boolean;
  drawerType: DrawerType | null;
}

const initialState: SideDrawerState = {
  isOpen: false,
  drawerType: null,
};

export const sideDrawerSlice = createSlice({
  name: 'sideDrawer',
  initialState,
  reducers: {
    openDrawer: (state, action) => {
      state.isOpen = true;
      state.drawerType = action.payload.drawerType;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
      state.drawerType = null;
    },
  },
});

export const useSideDrawer = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.sideDrawer.isOpen);
  const drawerType = useAppSelector((state) => state.sideDrawer.drawerType);

  const openDrawer = (drawerType: DrawerType) =>
    dispatch(sideDrawerSlice.actions.openDrawer({ drawerType }));
  const closeDrawer = () => dispatch(sideDrawerSlice.actions.closeDrawer());

  return { isOpen, openDrawer, closeDrawer, drawerType };
};

export default sideDrawerSlice.reducer;
