// @ts-nocheck
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import team_mem1 from './../home/assets/img/team-aynur.png';
import team_mem2 from './../home/assets/img/team-chingiz.png';
import team_mem3 from './../home/assets/img/team-ramazan.png';
import team_mem4 from './../home/assets/img/team-aynure.png';
import team_mem5 from './../home/assets/img/team-question.png';
import team_mem6 from './../home/assets/img/team-mehemmed.png';





const aboutAdapter = createEntityAdapter({
    selectId:(teamMember) => teamMember.id,
    sortComparer:(preMember,nextMember) => preMember.id.localeComparer(nextMember.id)
})

const initialState = {
    error:null,
    status:'idle',
    selectedMember:{},
    members:{
        ids:["id1","id2","id3","id4","id5","id6"],
        entities:{
            id1:{
                id:"id1",
                name:"Aynur Nizamova",
                position:"Biznes Konsultant",
                education:"Azərbaycan Dövlət İqtisad Universiteti, Dünya İqtisadiyyatı",
                img:team_mem1
            },
            id2:{
                id:"id2",
                name:"Çingiz Novruzzadə",
                position:"Təsisçi və Direktor",
                education:"İUBH International Management və Univeristy of East Anglia Investment and Financial Management",
                img:team_mem2
            },
            id3:{
                id:"id3",
                name:"Ramazan Əliquliyev",
                position:"Satış və Marketinq",
                education:"Saint Petersburg, Polytechnic University, Digital Marketing and E-Commerce",
                img:team_mem3
            },
            id4:{
                id:"id4",
                name:"Rahilə Kosayeva",
                position:"Layihə Meneceri",
                education:"Azərbaycan Dillər Universiteti, İngilis dili və Shawnee State University, Beynəlxalq Əlaqələr",
                img:team_mem4
            },
            id5:{
                id:"id5",
                name:"Elnur Şabanov",
                position:"Aparıcı Biznes Konsultant",
                education:"Azərbaycan Dövlət İqtisad Universiteti, Beynəlxalq Ticarət və Kommersiya",
                img:team_mem5
            },
            id6:{
                id:"id6",
                name:"Məhəmməd Şıxıyev",
                position:"Aparıcı Data Analitik",
                education:" French-Azerbaijani University, BS Geoscience",
                img:team_mem6
            },
        }
    }
}


const sliceInvoker = () => {
    return {
        name:'about',
        initialState,
        reducers:{},
        extraReducers:{}
    }
}

const aboutSlice = createSlice(sliceInvoker()) ; 

export const  {
    selectAll:selectAllMembers,
    selectById:selectMemberById,
    selectIds:selectMemberIds

} = aboutAdapter.getSelectors(state => state.about.members)
export default aboutSlice.reducer