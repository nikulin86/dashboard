import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dashboardReducer from './slice/expenseSlice'

const rootReducer = combineReducers({
    dashboardApp: dashboardReducer,
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}



export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];