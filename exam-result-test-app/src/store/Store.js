import { configureStore } from "@reduxjs/toolkit";
import LectureNavigationSliceReducer from "./reducers/LectureNavigationSlice";
import DptSecretaryNavigationSliceReducer from "./reducers/DptSecretaryNavigationSlice";
import HODNavigationSliceReducer from "./reducers/HODNavigationSlice";
import DeanNavigationSliceReducer from "./reducers/DeanNavigationSlice";
import ExamDptNavigationSliceReducer from "./reducers/ExamDptNavigationSlice";
import RegistarNavigationSliceReducer from "./reducers/RegistarNavigationSlice";
import VCNavigationSliceReducer from "./reducers/VCNavigationSlice";


const store = configureStore({
    reducer: {
        // Add reducers here
        lectureNavigationSlice:LectureNavigationSliceReducer,
        dptSecretaryNavigationSlice:DptSecretaryNavigationSliceReducer,
        hodNavigationSlice:HODNavigationSliceReducer,
        deanNavigationSlice:DeanNavigationSliceReducer,
        examDptNavigationSlice:ExamDptNavigationSliceReducer,
        registarNavigationSlice: RegistarNavigationSliceReducer,
        vcNavigationSlice:VCNavigationSliceReducer
    }
})

export default store