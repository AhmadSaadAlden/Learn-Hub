import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course, mockCoursesData } from "./mockData/coursesData";

interface CoursesState  {
    courses : Course[]
    currentPage: number
    coursesPerPage: number
}

const initialState: CoursesState = {
    courses: mockCoursesData,
    currentPage : 1,
    coursesPerPage: 6,
}

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        }
    }
})
export default coursesSlice.reducer
export const {setCurrentPage} = coursesSlice.actions

//selectors
export const selectAllCourses = (state: {courses: CoursesState }) => state.courses.courses
export const selectCurrentPage = (state: {courses: CoursesState }) => state.courses.currentPage
export const selectCoursesPerPage = (state: {courses: CoursesState }) => state.courses.coursesPerPage