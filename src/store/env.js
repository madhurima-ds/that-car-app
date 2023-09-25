import { createSlice } from "@reduxjs/toolkit";

/* This value would normally come from a .properties or .env file */
//const SERVER = "http://localhost:8080/api";
const SERVER = "https://inventoryservices-thatcarplace.apps.prft-cps.zuvk.p1.openshiftapps.com/api";

const initialEnvironmentState = {
  serverURL: SERVER
};

const envSlice = createSlice({
  name: "env",
  initialState: initialEnvironmentState,
});

export default envSlice.reducer;
