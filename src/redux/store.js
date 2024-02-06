import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./transaction";

export default configureStore({
  reducer: {
    expense: expenseReducer,
  },
});

// modal: modalReducer,
// import modalReducer from "./modal";
