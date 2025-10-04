/* import { configureStore } from "@reduxjs/toolkit"
import  themeReducer  from '@/lib/redux/slices/themeSlice'
import  languageReducer  from '@/lib/redux/slices/languageSlice'
import authReducer from '@/lib/redux/slices/auth/authSlice'
import saveStateToLocalStorage from '@/lib/redux/slices/auth/authSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    auth: authReducer
  },
  middleware: (getDefault) => getDefault().concat(store => next => action => {
    const result = next(action)
    // حفظ حالة المصادقة في localStorage بعد أي action
    if (action.type.startsWith('/auth')) {
      const authState = store.getState().auth
      saveStateToLocalStorage(authState);

    }
    return result
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
 */
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