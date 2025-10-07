import { time } from 'console';
import { Course } from './mockData/coursesData';

interface TranslatedCourseData {
    imgTitle: string
    description: string
    title: string
    free: string
    viewMore: string
    level: string
    lesson: string
    quizze: string
    btn: string
    times: string
    student: string
}

export const combineCourseData = (course: Course, translatedData: TranslatedCourseData) => {
    return {
        // from redux
        id: course.id.toString(),
        img: course.img,
        price: course.price,
        study: course.study,
        time: course.time,
        sale: course.sale,
        lessons: course.lessons,
        quizzes: course.quizzes,
        // from translated
        imgTitle: translatedData.imgTitle,
        description: translatedData.description,
        title: translatedData.title,
        free: translatedData.free,
        viewMore: translatedData.viewMore,
        level: translatedData.level,
        lesson: translatedData.lesson,
        quizze: translatedData.quizze,
        btn: translatedData.btn,
        times: translatedData.times,
        student: translatedData.student
    }

}