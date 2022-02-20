// @ts-nocheck
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import demirchi from './../about/assets/img/customers/demirchi-tower.png';
import absheronsherab from './../about/assets/img/customers/absheron-sherab.png';
import antaris from './../about/assets/img/customers/antaris.png';
import prestijkimya from './../about/assets/img/customers/Prestij-kimya.png';
import bakiabadliq from './../about/assets/img/customers/baki-abadliq.png';
import azminerals from './../about/assets/img/customers/az-minerals.png';
import elbor from './../about/assets/img/customers/Elbor.png';
import imaenergy from './../about/assets/img/customers/ima-energy.png';
import mansard from './../about/assets/img/customers/mansard.png';
import oilsupply from './../about/assets/img/customers/Oil-Supply.png';
import tuvaustria from './../about/assets/img/customers/tuv-austria.png';
import vipexaz from './../about/assets/img/customers/vipex-az.png';

const adapterCreator = () => {
    return {
        selectId:(testimonial) => testimonial.id,
        sortComparer:(previousTestimonial,nextTestimonial) => previousTestimonial.id.localeCompare(nextTestimonial.id)
    }
}

const testimonialsAdapter = createEntityAdapter(adapterCreator());

const initialState = {
    error:null,
    status:'idle',
    activeTestimonial:{},
    testimonials:{
        ids:[
            "ids1",
            "ids2",
            "ids3",
            "ids4",
            "ids5",
            "ids6",
            "ids7",
            "ids8",
            "ids9",
            "ids10",
            "ids11",
            "ids12",
        ],
        entities:{
            ids1:{id:"ids1",name:"demirchi",img:demirchi},
            ids2:{id:"ids2",name:"absheronsherab",img:absheronsherab},
            ids3:{id:"ids3",name:"antaris",img:antaris},
            ids4:{id:"ids4",name:"prestijkimya",img:prestijkimya},
            ids5:{id:"ids5",name:"bakiabadliq",img:bakiabadliq},
            ids6:{id:"ids6",name:"azminerals",img:azminerals},
            ids7:{id:"ids7",name:"elbor",img:elbor},
            ids8:{id:"ids8",name:"imaenergy",img:imaenergy},
            ids9:{id:"ids9",name:"mansard",img:mansard},
            ids10:{id:"ids10",name:"oilsupply",img:oilsupply},
            ids11:{id:"ids11",name:"tuvaustria",img:tuvaustria},
            ids12:{id:"ids12",name:"vipexaz",img:vipexaz},
        }
    }
}

const sliceInvoker = () => {
    return {
        name:'testimonials',
        initialState,
        reducers:{},
        extraReducers:{}
    }
}

const testimonialsSlice = createSlice(sliceInvoker());

export const {
    selectAll:selectAllTestimonials,
    selectById:selectTestimonialById,
    selectIds:selectAllTestimonialsIds

} = testimonialsAdapter.getSelectors(state => state.testimonials.testimonials)
export default testimonialsSlice.reducer