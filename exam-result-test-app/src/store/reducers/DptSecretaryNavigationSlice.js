import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isClickedAllResults:true,
    isClickedViewResult:false,
    isClickedHistory:false,
    isClickedApprovedResultView:false
}

const dptSecretaryNavigationSlice = createSlice({
    name:"dptSecretaryNavigations",
    initialState,
    reducers:{
        dptClickAllResult:(state,action)=>{
            state.isClickedAllResults = action.payload
        },
        dptClickViewResult:(state,action)=>{
            state.isClickedViewResult = action.payload
        },
        dptClickHistory: (state,action)=>{
            state.isClickedHistory = action.payload
        },
        dptClickApprovedResultView: (state,action)=>{
            state.isClickedApprovedResultView = action.payload
        }
    }
})

export const {
    dptClickAllResult,
    dptClickViewResult,
    dptClickHistory,
    dptClickApprovedResultView
} = dptSecretaryNavigationSlice.actions

export default dptSecretaryNavigationSlice.reducer