import { createSlice } from "@reduxjs/toolkit"

const intialState = {
    isClickedAllReultSheets:true,
    isClickedViewResult:false,
    isClickedHistory:false,
    isClickedApprovedResultView:false,
    isClickedCollection:false,
    isClickedCollectionView:false,
    isClickedResultSheetsCollectionView:false,
}

const DeanNavigationSlice = createSlice({
    name:'DeanNavigation',
    initialState:intialState,
    reducers:{
        deanClickAllReultSheets:(state, action)=>{
            state.isClickedAllReultSheets = action.payload
        },
        deanClickViewResult:(state, action)=>{
            state.isClickedViewResult = action.payload
        },
        deanClickHistory: (state,action)=>{
            state.isClickedHistory = action.payload
        },
        deanClickApprovedResultView:(state,action)=>{
            state.isClickedApprovedResultView = action.payload
        },
        deanClickCollection: (state,action)=>{
            state.isClickedCollection = action.payload
        },
        deanClickCollectionView:(state,action)=>{
            state.isClickedCollectionView = action.payload
        },
        deanClickResultSheetsCollectionView:(state,action)=>{
            state.isClickedResultSheetsCollectionView = action.payload
        }
    }
})

export const {
    deanClickAllReultSheets, 
    deanClickViewResult, 
    deanClickHistory, 
    deanClickApprovedResultView,
    deanClickCollection,
    deanClickCollectionView,
    deanClickResultSheetsCollectionView

} = DeanNavigationSlice.actions

export default DeanNavigationSlice.reducer