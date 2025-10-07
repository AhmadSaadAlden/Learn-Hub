import { configureStore } from "@reduxjs/toolkit"
import  themeReducer  from '@/lib/redux/slices/themeSlice'
import  languageReducer  from '@/lib/redux/slices/languageSlice'
import authReducer from '@/lib/redux/slices/auth/authSlice'
import coursesReducer from "@/lib/redux/slices/courses/courseSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    auth: authReducer,
    courses: coursesReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;