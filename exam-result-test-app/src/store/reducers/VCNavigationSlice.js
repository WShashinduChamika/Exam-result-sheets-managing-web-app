import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isClickedCollection:true,
    isClickedCollectionView: false,
    isClickedResultSheetsCollectionView: false,
    isClickedApprovedCollection: false,
    isClickedApprovedCollectionView: false,
    isClickedApprovedResultSheetsCollectionView: false,
    isApprovedResult:false
}

const VCNavigationSlice = createSlice({
    name: 'registarNavigation',
    initialState,
    reducers:{
        vcClickCollection:(state,action)=>{
             state.isClickedCollection = action.payload
        },
        vcClickCollectionView:(state,action)=>{
            state.isClickedCollectionView = action.payload
        },
        vcClickResultSheetsCollectionView:(state,action)=>{
            state.isClickedResultSheetsCollectionView = action.payload
        },
        vcClickApprovedCollection: (state,action) =>{
             state.isClickedApprovedCollection = action.payload
        },
        vcClickApprovedCollectionView: (state,action)=>{
            state.isClickedApprovedCollectionView = action.payload
        },
        vcClickApprovedResultSheetsCollectionView: (state,action)=>{
            state.isClickedApprovedResultSheetsCollectionView = action.payload
        },
        vcClickResultApprovalBtn: (state,action)=>{
            state.isApprovedResult = action.payload
        }
    }
})

export const {
     vcClickCollection,
     vcClickCollectionView,
     vcClickResultSheetsCollectionView,
     vcClickApprovedCollection,
     vcClickApprovedCollectionView,
     vcClickApprovedResultSheetsCollectionView,
     vcClickResultApprovalBtn
} = VCNavigationSlice.actions

export default VCNavigationSlice.reducer