'use client'

import { useAppDispatch, useAppSelector } from "@/lib/redux/store/hook"
import { selectAllCourses, selectCurrentPage, selectCoursesPerPage, setCurrentPage } from "@/lib/redux/slices/courses/courseSlice"
import { useTranslation } from "@/lib/i18n/useTranslation"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export const Pagination = () => {
    const {lang} = useTranslation()
    const dispatch = useAppDispatch()
    const courses = useAppSelector(selectAllCourses)
    const currentPage = useAppSelector(selectCurrentPage)
    const coursesPerPage = useAppSelector(selectCoursesPerPage)
    const totalPages = Math.ceil(courses.length / coursesPerPage)

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            dispatch(setCurrentPage(page))
        }
    }

    return (
        <div className="max-w-[288px] h-10 md:h-12 gap-2 md:gap-3 flex items-center">
            <button 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 1}
                className="w-10 md:w-12 h-10 md:h-12 border border-gray-300 rounded-full cursor-pointer flex justify-center items-center disabled:opacity-50"
            >
                <FaChevronLeft className={`text-[var(--courses-pagintion-icon)] w-2 h-3 ${lang == "ar" ? "rotate-180" : ""}`}/>
            </button>

            <div className="flex justify-center items-center gap-2 md:gap-3">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button 
                        key={i} 
                        onClick={() => handlePageChange(i + 1)}
                        className={`w-12 h-12 border border-gray-300 rounded-full cursor-pointer 
                            ${currentPage === i + 1 ? "bg-[var(--courses-pagintion-title-hover)] text-white" : "text-[var(--courses-pagintion-title)] hover:bg-[var(--courses-pagintion-title-hover)]"}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            <button 
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
                className="w-10 md:w-12 h-10 md:h-12 border border-gray-300 rounded-full cursor-pointer flex justify-center items-center disabled:opacity-50"
            >
                <FaChevronRight className={`text-[var(--courses-pagintion-icon)] w-2 h-3 ${lang == "ar" ? "rotate-180" : ""}`}/>
            </button>
        </div>
    )
}
