'use client'
import { SecondaryCard } from "@/components/Card/SecondaryCard"
import { Pagination } from "@/components/Pagination/Pagination"
import { useTranslation } from "@/lib/i18n/useTranslation"
import { selectAllCourses, selectCoursesPerPage, selectCurrentPage } from "@/lib/redux/slices/courses/courseSlice"
import { combineCourseData } from "@/lib/redux/slices/courses/courseUtils"
import { useAppSelector } from "@/lib/redux/store/hook"
import { FaSearch, FaThLarge, FaThList } from "react-icons/fa"

const AllCourses = () => {
    const {t} = useTranslation()
    const courses = useAppSelector(selectAllCourses)
    const currentPage = useAppSelector(selectCurrentPage)
    const coursesPerPage  = useAppSelector(selectCoursesPerPage)
    // حساب حدود بيانات
    const indexOfLastCourse = currentPage * coursesPerPage 
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage 
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse)

    return (
        <div className="px-[70px] py-14">
            <div className="flex flex-col md:flex-row justify-between gap-8 items-start w-[320px] md:w-full">
                <h1 className="font-semibold text-4xl text-[var(--courses-title)]">{t.coursesDataHeading.title}</h1>
                <div className=" md:max-w-[350px] flex justify-between items-center gap-2 md:gap-5">
                    <div className="flex justify-between items-center">
                        <input type="search" placeholder={t.coursesDataHeading.search}  className="w-[239px] md:w-[270px] h-8 border-b border-b-[var(--course-search)] text-[var(--course-search)]" />
                        <FaSearch width={15} height={15} className="text-[var(--course-search)] border-none cursor-pointer" />
                    </div>
                    <FaThLarge width={15} height={15} className="text-orange-400 cursor-pointer"/>
                    <FaThList width={15} height={15} className="text-[var(--course-search)] cursor-pointer" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center mt-10 md:mt-[50px]'>
                {currentCourses.length > 0 ?
                    (
                        currentCourses.map((course) => {
                            const courseId = course.id as keyof typeof t.courses
                            const translatedData = t.courses[courseId]
                            return(
                                <SecondaryCard 
                                    key={course.id} 
                                    card={combineCourseData(course, translatedData)} 
                                />
                            )
                        })
                    )
                    :
                    (
                        <p className="text-gray-500">There is no courses in this page</p>
                    )
                }
            </div>
            <div className="mt-16 md:mt-[70px] flex justify-center items-center">
                <Pagination />
            </div>
        </div>
    )
}

export default AllCourses