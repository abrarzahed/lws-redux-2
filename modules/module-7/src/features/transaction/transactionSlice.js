import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactions,
} from "./transactionApi";

/* 
  COMMENT: initial state
*/
const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  transactions: [],
  itemToEdit: {},
};

/* 
  COMMENT: asynchronous thunks
*/
//=== get transactions  ===//
export const fetchTransactionsAsync = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const transactions = await getTransactions();
    return transactions;
  }
);

//=== add transaction  ===//
export const addTransactionsAsync = createAsyncThunk(
  "transactions/addTransactions",
  async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
  }
);

//=== edit transaction  ===//
export const editTransactionsAsync = createAsyncThunk(
  "transactions/editTransactions",
  async ({ id, data }) => {
    const transaction = await editTransaction({ id, data });
    return transaction;
  }
);

//=== delete transaction  ===//
export const deleteTransactionsAsync = createAsyncThunk(
  "transactions/deleteTransactions",
  async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
  }
);

/* 
  COMMENT: transaction slice
*/
const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    itemToEditSelected: (state, action) => {
      state.itemToEdit = action.payload;
    },
    itemToEditDeselected: (state) => {
      state.itemToEdit = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionsAsync.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.transactions = [];
      })
      .addCase(fetchTransactionsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = action.payload;
      })
      .addCase(fetchTransactionsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action?.error?.message;
        state.transactions = [];
      })
      .addCase(addTransactionsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = [...state.transactions, action.payload];
      })
      .addCase(addTransactionsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action?.error?.message;
      })
      .addCase(editTransactionsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = state.transactions.map((transaction) => {
          if (transaction.id === action.payload.id) {
            return action.payload;
          } else {
            return transaction;
          }
        });
      })
      .addCase(editTransactionsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(deleteTransactionsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        );
      })
      .addCase(deleteTransactionsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action?.error?.message;
      });
  },
});

export default transactionsSlice.reducer;
export const { itemToEditSelected, itemToEditDeselected } =
  transactionsSlice.actions;
