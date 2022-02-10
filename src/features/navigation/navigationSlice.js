/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */

import { createSlice, createEntityAdapter } from '@reduxjs/toolkit' ; 
import { navigationData } from './navigationData'

const navigationAdapter = createEntityAdapter({
    selectId:(item) => item.id,
    sortComparer:(preItem,nextItem) => preItem.id.localeCompare(nextItem.id)
})


const initialState = {
    error:null,
    status:'idle',
    selectedLink:{},
    links:navigationData
}

const navigationSlice = createSlice(sliceInvoker()) ; 


function sliceInvoker() {
    return {
        name:'navigation',
        initialState,
        reducers:{},
        extraReducers:{}
    }
}



export const {
    selectAll:selectAllLinks,
    selectById:selectLinkById,
    selectIds:selectAllNavigationIds

} = navigationAdapter.getSelectors(state => state.navigation.links)

export default navigationSlice.reducer ; 