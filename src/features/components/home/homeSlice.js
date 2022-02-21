/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */

import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { homeData } from './homeData';

const homeAdapter = createEntityAdapter({
  selectId: (item) => item.id,
  sortComparer: (preService, nextService) => preService.id.localeCompare(nextService.id)
});

const initialState = {
  error: null,
  status: 'idle',
  activeService: {},
  services: homeData
};

const homeSlice = createSlice(sliceInvoker());

function sliceInvoker() {
  return {
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: {}
  };
}

export const {
  selectAll: selectAllServices,
  selectById: selectServiceById,
  selectIds: selectServiceIds
} = homeAdapter.getSelectors((state) => state.home.services);

export default homeSlice.reducer;
