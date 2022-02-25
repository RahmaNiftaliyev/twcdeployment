import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import techizat from './assets/icons/techizat.png';
import dasinmaz from './assets/icons/dasinmaz.png';
import ecommerce from './assets/icons/ecommerce.png';
import energy from './assets/icons/energy.png';
import tech from './assets/icons/tech.png';
import fmcg from './assets/icons/fmcg.png';
import maliyye from './assets/icons/maliyye.png';
import tikinti from './assets/icons/tikinti.png';
import transport from './assets/icons/transport.png';
import tehsil from './assets/icons/edu.png';
import senaye from './assets/icons/senaye.png';
import istehsal from './assets/icons/istehsal.png';
import retail from './assets/icons/retail.png';

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
            id1:{id:"id1",name:"Daşınmaz Əmlak", img:dasinmaz,link:"/industry/immovableproperty"},
            id2:{id:"id2",name:"Enerji", img:energy,link:"/industry/energy"},
            id3:{id:"id3",name:"Maliyyə Servisləri", img:maliyye,link:"/industry/financialservice"},
            id4:{id:"id4",name:"Sənaye Məhsulları", img:senaye,link:"/industry/industryproducts"},
            id5:{id:"id5",name:"Texnologiya, Media və Əyləncə", img:tech,link:"/industry/techmediaandfun"},
            id6:{id:"id6",name:"Transporstasiya  və Logistika", img:transport,link:"/industry/transportationandlogistics"},
            id7:{id:"id7",name:"İstehsal", img:istehsal,link:"/industry/manufacture"},
            id8:{id:"id8",name:"Retail", img:retail,link:"/industry/retail"},
            id9:{id:"id9",name:"Təchizat", img:techizat,link:"/industry/supplements"},
            id10:{id:"id10",name:"Təhsil", img:tehsil,link:"/industry/education"},
            id11:{id:"id11",name:"FMCG", img:fmcg,link:"/industry/fmcg"},
            id12:{id:"id12",name:"Tikinti", img:tikinti,link:"/industry/architect"},
            id13:{id:"id13",name:"E-commerce", img:ecommerce,link:"/industry/ecommerce"}
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