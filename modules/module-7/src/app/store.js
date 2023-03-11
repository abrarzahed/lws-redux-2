import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transaction/transactionSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});
