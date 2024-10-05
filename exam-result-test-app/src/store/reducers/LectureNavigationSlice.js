import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number:0,
    isSetupDetails:false,
    isClickedAddResult:true,
    isClickedApprovalPendingResults:false,
    isclickedViewResult:false,
    isClickedApprovalRequestResults:false,
    isClickedApprovalRequestView:false,
    isClickedHistory:false,
    isClickedHistoryView:false
}
const lectureNavigationSlice = createSlice({
    name:"lectureNavaigations",
    initialState,
    reducers:{
        clickAddResult:(state,action)=>{
          state.isClickedAddResult = action.payload
        },
        clickDetailsProceed:(state, action)=>{
            state.isSetupDetails = action.payload
        },
        clickedAprovalPendingResults:(state,action)=>{
            state.isClickedApprovalPendingResults = action.payload
        },
        clickViewResult:(state,action)=>{
            state.isclickedViewResult = action.payload
        },
        clickApprovalRequestResults:(state,action)=>{
            state.isClickedApprovalRequestResults = action.payload
        },
        clickApprovalRequestView:(state,action)=>{
            state.isClickedApprovalRequestView = action.payload
        },
        clickHistory: (state,action)=>{
            state.isClickedHistory = action.payload
        },
        clickHistoryView:(state,action)=>{
            state.isClickedHistoryView = action.payload
        } 
        
    }
})

export const {
    clickDetailsProceed,
    clickedAprovalPendingResults, 
    clickViewResult, 
    clickAddResult, 
    clickApprovalRequestResults,
    clickApprovalRequestView,
    clickHistory,
    clickHistoryView} = lectureNavigationSlice.actions

export default lectureNavigationSlice.reducer

