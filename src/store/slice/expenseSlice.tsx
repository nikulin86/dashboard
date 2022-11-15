import { IExpense } from "../../Types";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface DashboardStates {
    expense: IExpense[],
  }



  const initialState: DashboardStates = {
    expense: [],
  };

  export const dashboardAppSlice = createSlice({
    name: "dashboardApp",
    initialState,
    reducers: {
      addExpense: (state, action) => {
        state.expense = action.payload
      },
    },
  
    extraReducers: () => {
    }
  });

  export const { addExpense } = dashboardAppSlice.actions;


  export default dashboardAppSlice.reducer;