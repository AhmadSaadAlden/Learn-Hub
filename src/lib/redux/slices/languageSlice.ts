import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LangState = {
  lang: "en" | "ar"
  dir: "ltr" | "rtl"
  isInitialized: boolean
};

const initialState: LangState = {
    lang: "en",
    dir: "ltr",
    isInitialized: false
};

type payloadLanguage = "en" | "ar"

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<payloadLanguage>) => {
      state.lang = action.payload;
      state.dir = action.payload === "ar" ? "rtl" : "ltr";
      state.isInitialized = true
    },
    initializeLanguage: (state) => {
      if (!state.isInitialized) {
        state.isInitialized = true
      }
    }
  },
});

export const { setLanguage, initializeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
