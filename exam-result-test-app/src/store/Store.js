import { configureStore } from "@reduxjs/toolkit";
import LectureNavigationSliceReducer from "./reducers/LectureNavigationSlice";
import DptSecretaryNavigationSliceReducer from "./reducers/DptSecretaryNavigationSlice";
import HODNavigationSliceReducer from "./reducers/HODNavigationSlice";
import DeanNavigationSliceReducer from "./reducers/DeanNavigationSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        lectureNavigationSlice:LectureNavigationSliceReducer,
        dptSecretaryNavigationSlice:DptSecretaryNavigationSliceReducer,
        hodNavigationSlice:HODNavigationSliceReducer,
        deanNavigationSlice:DeanNavigationSliceReducer
    }
})

export default store