import { createSlice } from "@reduxjs/toolkit";

const initialStatusState = {
  isBusy: false,
  message: "Processing..."
};

const statusSlice = createSlice({
  name: "busy",
  initialState: initialStatusState,
  reducers: {
    showStatus(state, action) {
      state.isBusy = true;
      if(action.payload.trim().length === 0)
        state.message = initialStatusState.message;
      else
        state.message = action.payload;
    },
    hideStatus(state) {
      state.isBusy = false;
    },
  },
});

export const statusActions = statusSlice.actions;
export default statusSlice.reducer;
