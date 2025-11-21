import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    weather: {},
    traffic: {}
  },
  reducers: {
    setWeather(state, action) {
      state.weather = action.payload;
    },
    setTraffic(state, action) {
      state.traffic = action.payload;
    }
  }
});

export const { setWeather, setTraffic } = dataSlice.actions;
export default dataSlice.reducer;
