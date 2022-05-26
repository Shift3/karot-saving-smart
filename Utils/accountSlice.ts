import { createSlice } from "@reduxjs/toolkit";
import { AccountType } from "./types";

interface InitialStateType {
  list: AccountType[];
}

const initialState: InitialStateType = {
  list: [],
};

export const accountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const { addAccount } = accountSlice.actions;

export default accountSlice.reducer;