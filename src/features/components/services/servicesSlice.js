// @ts-nocheck
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import bazararasdirmasi from './../about/assets/img/about-us/market-research.png'
import biznesplan from './../about/assets/img/about-us/business-plan.png'
import kapitallasma from './../about/assets/img/about-us/capitallismus.png'
import satisvemarketing from './../about/assets/img/about-us/sales-marketing.png'
import strategyandfinance from './../about/assets/img/about-us/strategy-finance.png'
import teskilati from './../about/assets/img/about-us/organizational.png'

const servicesAdapter = createEntityAdapter({
    selectId: (service) => service.id,
    sortComparer:(previousService,nextService) => previousService.id.localeComparer(nextService.id)
})


const initialState = {
    status:'idle',
    error:null,
    selectedService:{},
    services:{
        ids:["id1","id2","id3","id4","id5","id6"],
        entities:{
            id1:{id:"id1",name:"Bazar Araşdırması",img:bazararasdirmasi,to:"/services/marketresearch"},
            id2:{id:"id2",name:"Biznes Plan və TİƏ ",img:biznesplan,to:"/services/businessplan"},
            id3:{id:"id3",name:"Kapitallaşma",img:kapitallasma,to:"/services/investmentable"},
            id4:{id:"id4",name:"Satış və Marketinq",img:satisvemarketing,to:"/services/marketing"},
            id5:{id:"id5",name:"Strategiya və Maliyyə",img:strategyandfinance,to:"/services/finance"},
            id6:{id:"id6",name:"Təşkilati",img:teskilati,to:"/services/companyable"}
        }
    }
}


const sliceInvoker = () => {
    return {
        name:'slices',
        initialState,
        reducers:{},
        extraReducers:{}
    }
}


const servicesSlice = createSlice(sliceInvoker());



export const {

    selectAll:selectAllServices,
    selectById:selectServiceById,
    selectIds:selectAllServicesIds

} = servicesAdapter.getSelectors(state => state.services.services)

export default servicesSlice.reducer