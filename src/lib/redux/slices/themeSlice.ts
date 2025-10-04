import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  value: "light" | "dark";
};

const initialState: ThemeState = {
  value: "light", // default
};

type payloadTheme = "light" | "dark"

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<payloadTheme>) => {
      state.value = action.payload;
    },
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer
