/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { footerLinks } from './footerData'

const footerAdapter = createEntityAdapter({
  selectId: (footerItem) => footerItem.id,
  sortComparer: (preLink, nextLink) => preLink.id.localeCompare(nextLink.id),
})

const initialState = {
  error: null,
  status: 'idle',
  activeLink: {},
  links: footerLinks,
}

const footerSlice = createSlice(sliceInvoker())

function sliceInvoker() {
  return {
    name: 'footer',
    initialState,
    reducers: {},
    extraReducers: {},
  }
}

export const {
  selectAll: selectAllFooterLinks,
  selectById: selectFooterLinkById,
  selectIds: selectFooterIds,
} = footerAdapter.getSelectors((state) => state.footer.links)

export default footerSlice.reducer


/*
    ids: string[];
    entities: {
        id1: {
            id: string;
            header: string;
            headerItems: {
                name: string;
                linkedMethod: string;
            }[];
        };

*/