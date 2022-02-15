import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const careersAdapter = createEntityAdapter({
    selectId: (vacancy) => vacancy.id ,
    sortComparer:(preVacancy,nextVacancy) => preVacancy.id.localeCompare(nextVacancy.id)
})

const initialState = {
    status:'idle',
    error:null,
    activeVacation:{},
    vacantions:{
        ids:['ids1','ids2'],
        entities:{
            ids1:{
                id:'ids1',name:"Associate",forwarding:"/career/vacancies/"
            },
            ids2:{
                id:"ids2",name:"Biznes konsultant",forwarding:"/career/vacancies/"
            }    
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