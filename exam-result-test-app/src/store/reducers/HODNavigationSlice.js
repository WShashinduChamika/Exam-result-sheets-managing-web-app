import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isClickedAllResult:true,
    isClickedViewResult:false,
    isClickedHistory:false,
    isClickedApprovedResultView:false
}

const hodNavigationSlice = createSlice({
    name:"hodNavigations",
    initialState,
    reducers:{
        hodClickAllResult:(state,action)=>{
            state.isClickedAllResult = action.payload
        },
        hodClickViewResult:(state,action)=>{
            state.isClickedViewResult = action.payload
        },
        hodClickHistory:(state,action)=>{
            state.isClickedHistory = action.payload
        },
        hodClickApprovedResultView:(state,action)=>{
            state.isClickedApprovedResultView = action.payload
        }
    }
})

export const {hodClickAllResult, hodClickHistory, hodClickViewResult, hodClickApprovedResultView} = hodNavigationSlice.actions

export default hodNavigationSlice.reducer