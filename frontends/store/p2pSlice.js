import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "Buyer",
  paymentMethod: "EFT Token",
  pricePerUnitUSD: "",
  pricePerUnitMATIC: "",
  pricePerUnitError: "",
  amount: "",
  amountError: "",
  pricePerUnitConversionRate: "",
  addedListingMessage: "",
  listings: [],
  loading: true,
  toggleDropdown: false,
};

export const p2pSlice = createSlice({
  name: "p2p",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    setPricePerUnitUSD: (state, action) => {
      state.pricePerUnitUSD = action.payload;
    },
    setPricePerUnitMATIC: (state, action) => {
      state.pricePerUnitMATIC = action.payload;
    },
    setPricePerUnitError: (state, action) => {
      state.pricePerUnitError = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setAmountError: (state, action) => {
      state.amountError = action.payload;
    },
    setConversionRate: (state, action) => {
      state.pricePerUnitConversionRate = action.payload;
    },
    setAddedListingMessage: (state, action) => {
      state.addedListingMessage = action.payload;
    },
    setListings: (state, action) => {
      state.listings = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setToggleDropdown: (state, action) => {
      state.toggleDropdown = action.payload;
    },
  },
});

export const {
  setMode,
  setPaymentMethod,
  setPricePerUnitUSD,
  setPricePerUnitMATIC,
  setPricePerUnitError,
  setAmount,
  setAmountError,
  setConversionRate,
  setAddedListingMessage,
  setListings,
  setLoading,
  setToggleDropdown,
} = p2pSlice.actions;

export default p2pSlice.reducer;