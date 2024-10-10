import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isClickedAllResults:true,
    isClickedViewResult:false,
    isClickedHistory:false,
    isClickedApprovedResultView:false,
    //Added new content (This does not need since it for approval rejected results)
    isClickedNotApprovedResults:false,
    isClickedNotApprovedResultView:false
    //
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
        },
        //Added new content (This does not need since it for approval rejected results)
        dptClickNotApprovedResult: (state,action)=>{
            state.isClickedNotApprovedResults = action.payload
        },
        dptClickNotApprovedResultView: (state,action)=>{
            state.isClickedNotApprovedResultView = action.payload
        }
        //
    }
})

export const {
    dptClickAllResult,
    dptClickViewResult,
    dptClickHistory,
    dptClickApprovedResultView,
    //Added new content (This does not need since it for approval rejected results)
    dptClickNotApprovedResult,
    dptClickNotApprovedResultView
    //
} = dptSecretaryNavigationSlice.actions

export default dptSecretaryNavigationSlice.reducer