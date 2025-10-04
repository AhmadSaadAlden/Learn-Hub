import { RootState } from "../../store/store"

export const selectAuth = (state: RootState) => state.auth
export const selectCurrentUser = (state: RootState) => state.auth.currentUser
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated
export const selectAuthStatus = (state: RootState) => state.auth.status
export const selectAuthError = (state: RootState) => state.auth.error
export const selectUsers = (state: RootState) => state.auth.users
//export const selectAuthToken = (state: RootState) => state.auth.token
