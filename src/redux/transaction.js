import { createSlice } from "@reduxjs/toolkit";

export const expenseReducer = createSlice({
  name: "expense",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      console.log("THIS IS THE STATE BEFORE", state);
      let expense = {
        id: Math.random(),
        description: action.payload.description,
        income: Math.sign(action.payload.amount) == -1 ? false : true,
        amount: action.payload.amount,
      };
      state.push(expense);
      console.log("THIS IS THE NEW STATE", state);
    },

    deleteExpense: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { addExpense, deleteExpense } = expenseReducer.actions;
export default expenseReducer.reducer;
