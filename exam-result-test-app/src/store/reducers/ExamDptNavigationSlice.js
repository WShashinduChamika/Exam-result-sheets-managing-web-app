import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isClickedCollection: true,
    isClickedCollectionView: false,
    isClickedResultSheetsCollectionView: false,
    isClickedApprovedCollection: false,
    isClickedApprovedCollectionView: false,
    isClickedApprovedResultSheetsCollectionView: false,
}

const ExamDepartmentSlice = createSlice({
    name: 'examDepartment',
    initialState,
    reducers: {
        examDepartmentClickCollection: (state, action) => {
            state.isClickedCollection = action.payload
        },
        examDepartmentClickCollectionView: (state, action) => {
            state.isClickedCollectionView = action.payload
        },
        examDepartmentClickResultSheetsCollectionView: (state, action) => {
            state.isClickedResultSheetsCollectionView = action.payload
        },
        examDepartmentClickApprovedCollection: (state, action) => {
            state.isClickedApprovedCollection = action.payload
        },
        examDepartmentClickApprovedCollectionView: (state, action) => {
            state.isClickedApprovedCollectionView = action.payload
        },
        examDepartmentClickApprovedResultSheetsCollectionView: (state, action) => {
            state.isClickedApprovedResultSheetsCollectionView = action.payload
        }
    }
})

export const { 
    examDepartmentClickCollection, 
    examDepartmentClickCollectionView, 
    examDepartmentClickResultSheetsCollectionView,
    examDepartmentClickApprovedCollection,
    examDepartmentClickApprovedCollectionView,
    examDepartmentClickApprovedResultSheetsCollectionView 
} = ExamDepartmentSlice.actions

export default ExamDepartmentSlice.reducer