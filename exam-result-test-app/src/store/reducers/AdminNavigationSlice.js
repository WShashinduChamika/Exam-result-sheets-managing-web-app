import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isClickedCreateUser:true,
    isClickedUserList:false,
    isClickedUserListView:false
}

const adminNavigationSlice = createSlice({
    name:'adminNavigation',
    initialState,
    reducers:{
        adminClickCreateUser: (state,action)=>{
            state.isClickedCreateUser = action.payload
        },
        adminClickUserList: (state,action)=>{
            state.isClickedUserList = action.payload
        },
        adminClickUserListView:(state,action)=>{
            state.isClickedUserListView = action.payload
        }
    }
})

export const {
    adminClickCreateUser,
    adminClickUserList,
    adminClickUserListView
} = adminNavigationSlice.actions

export default adminNavigationSlice.reducer