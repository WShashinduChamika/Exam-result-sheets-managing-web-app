import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isClickedCollection:true,
    isClickedCollectionView: false,
    isClickedResultSheetsCollectionView: false,
}

const pulishedResultNavigationSlice = createSlice({
    name: 'publishedResultNavigation',
    initialState,
    reducers:{
        clickCollection:(state,action)=>{
             state.isClickedCollection = action.payload
        },
        clickCollectionView:(state,action)=>{
            state.isClickedCollectionView = action.payload
        },
        clickResultSheetsCollectionView:(state,action)=>{
            state.isClickedResultSheetsCollectionView = action.payload
        },
    }
})

export const {
        clickCollection,
        clickCollectionView,
        clickResultSheetsCollectionView,
    } = pulishedResultNavigationSlice.actions

export default pulishedResultNavigationSlice.reducer