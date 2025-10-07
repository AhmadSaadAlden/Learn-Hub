'use client'
import React from "react"
import { useAppSelector } from "@/lib/redux/store/hook"
import { selectCourseById } from "@/lib/redux/slices/courses/courseSlice"
import { useTranslation } from "@/lib/i18n/useTranslation"
import { combineCourseData } from "@/lib/redux/slices/courses/courseUtils"
import { FaChartBar, FaClock, FaFileAlt, FaGraduationCap, FaQuestionCircle } from "react-icons/fa"
import Image from "next/image"
import CourseDetails from "@/components/CourseDetails/CourseDetails"

interface ShowCourseProps {
    params: Promise<{courseId: string}>
}

const ShowCourse = ({params}: ShowCourseProps) => {
    const { courseId } = React.use(params)
    const { t } = useTranslation()
    const course = useAppSelector((state) => selectCourseById(state, courseId))
    if (!course) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-red-600">الكورس غير موجود</h1>
            </div>
        )
    }
    const courseIdNum = course.id as keyof typeof t.courses
    const translatedData = t.courses[courseIdNum]
    const fullCourseData = combineCourseData(course, translatedData)

    return (
        <div>
            {/* الهيدر */}
            <div className="w-full h-[250px] md:h-[290px] bg-black text-white px-[70px] py-13 flex justify-between">
                <div className="flex flex-col h-full items-start">
                    <div className="flex justify-center items-center gap-5 text-white">
                        <span className="jost font-medium text-base bg-gray-700 w-[114px] h-10 rounded-lg flex justify-center items-center text-white">
                            {fullCourseData.imgTitle}
                        </span>
                        <p className="jost font-normal text-sm md:text-base text-[var(--FeaturedCourses-para)]">{fullCourseData.description}</p>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mt-5">{fullCourseData.title}</h1>
                    <div className="flex gap-6 mt-5">
                        <div className="flex justify-between items-center gap-2 jost font-normal text-[var(--FeaturedCourses-para)]">
                            <FaClock className="text-[var(--FeaturedCourses-icon)]" />
                            <span className="text-white">{fullCourseData.time} {translatedData.times}</span>
                        </div>
                        <div className="flex justify-between items-center gap-2 jost font-normal text-[var(--FeaturedCourses-para)]">
                            <FaGraduationCap className="text-[var(--FeaturedCourses-icon)]" />
                            <span className="text-white">{fullCourseData.study} {translatedData.student}</span>
                        </div>
                        <div className="flex justify-between items-center gap-2 jost font-normal text-[var(--FeaturedCourses-para)]">
                            <FaChartBar className="text-[var(--FeaturedCourses-icon)]" />
                            <span className="text-white">{translatedData.level}</span>
                        </div>
                        <div className="flex justify-between items-center gap-2 jost font-normal text-[var(--FeaturedCourses-para)]">  
                            <FaFileAlt className="text-[var(--FeaturedCourses-icon)]" /> 
                            <span className="text-white">{fullCourseData.lessons} {translatedData.lesson}</span>
                        </div>
                        <div className="flex justify-between items-center gap-2 jost font-normal text-[var(--FeaturedCourses-para)]">
                            <FaQuestionCircle className="text-[var(--FeaturedCourses-icon)]" />
                            <span className="text-white">{fullCourseData.quizzes} {translatedData.quizze}</span>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                        <div className="shadow-lg w-[410px] h-[358px]">
                            <div className="relative w-full h-[250px]">
                                <Image 
                                    src={fullCourseData.img} 
                                    alt={fullCourseData.imgTitle}
                                    fill 
                                    className="rounded-t-[20px]" 
                                />
                            </div>
                            <div className="flex justify-center items-center gap-8 mt-8">
                                <div className=" flex gap-3">
                                    <del className="text-black">
                                        {fullCourseData.sale}
                                    </del>
                                    <span className="text-orange-400">{fullCourseData.price}</span>
                                </div>
                                <div>
                                    <button className="w-32 h-12 bg-orange-400 rounded-3xl text-white cursor-pointer">{translatedData.btn}</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            {/* course details */}
            <div className="px-[70px] py-14">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* content */}
                    <div className="lg:col-span-2 w-[792px]">
                        <CourseDetails />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowCourse