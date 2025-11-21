import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    weather: {},
    traffic: {},
    refresh: {}
  },
  reducers: {
    setWeather(state, action) {
      state.weather = action.payload;
    },
    setTraffic(state, action) {
      state.traffic = action.payload;
    },
    setRefresh(state, action){
      state.refresh = action.payload
    }
  }
});

export const { setWeather, setTraffic, setRefresh } = dataSlice.actions;
export default dataSlice.reducer;
