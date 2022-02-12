import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";


const industriesAdapter = createEntityAdapter({
    selectId:(id) => id,
    sortComparer:(previousIndustry,nextIndustry) => previousIndustry.id.localeComparer(nextIndustry.id)
})

const initialState = {
    status:'idle',
    error:null,
    selectedIndustry:{},
    industries:{
        ids:["id1","id2","id3","id4","id5","id6","id7","id8","id9","id10","id11","id12","id13"],
        entities:{
            id1:{id:"id1",name:"Daşınmaz Əmlak"},
            id2:{id:"id2",name:"Enerji"},
            id3:{id:"id3",name:"Maliyyə Servisləri"},
            id4:{id:"id4",name:"Sənaye Məhsulları"},
            id5:{id:"id5",name:"Texnologiya, Media və Əyləncə"},
            id6:{id:"id6",name:"Transporstasiya  və Logistika"},
            id7:{id:"id7",name:"İstehsal"},
            id8:{id:"id8",name:"Retail"},
            id9:{id:"id9",name:"Təchizat"},
            id10:{id:"id10",name:"Təhsil"},
            id11:{id:"id11",name:"FMCG"},
            id12:{id:"id12",name:"Tikinti"},
            id13:{id:"id13",name:"E-commerce"}
        }
    }
}



const sliceInvoker = () => {
    return {
        name:'industries',
        initialState,
        reducers:{},
        extraReducers:{}
    }
}

const industriesSlice = createSlice(sliceInvoker());


export const {
    selectAll:selectAllIndustries,
    selectById:selectIndustryById,
    selectIds:selectIndustriesIds

} = industriesAdapter.getSelectors(state => state.industries.industries)



export const selectIndustryStatus = (state) => state.industries.status

export const selectIndustryError = (state) => state.industries.error

export const selectSelectedIndustry = (state) => state.industries.selectedIndustry


export default industriesSlice.reducer ; 