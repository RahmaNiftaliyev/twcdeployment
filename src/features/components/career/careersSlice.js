import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const careersAdapter = createEntityAdapter({
    selectId: (id) => id ,
    sortComparer:(preVacancy,nextVacancy) => preVacancy.id.localeCompare(nextVacancy.id)
})

const initialState = {
    status:'idle',
    error:null,
    activeVacation:{},
    vacantions:{
        ids:[],
        entities:{

        }
    }
}


const sliceInvoker = () => {
    return {
        name:'vacantions',
        initialState,
        reducers:{},
        extraReducers:{}
    }
}


const careersSlice = createSlice(sliceInvoker())  ; 

export const {
    selectAll:selectAllVacancies,
    selectById:selectVacantionById,
    selectIds:selectVacationIds

} = careersAdapter.getSelectors(state => state.careers.vacantions)
export default careersSlice.reducer