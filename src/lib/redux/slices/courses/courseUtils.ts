import { Course } from './mockData/coursesData';

interface TranslatedCourseData {
    imgTitle: string
    description: string
    title: string
    free: string
    viewMore: string
}

export const combineCourseData = (course: Course, translatedData: TranslatedCourseData) => {
    return {
        // from redux
        img: course.img,
        price: course.price,
        study: course.study,
        time: course.time,
        // from translated
        imgTitle: translatedData.imgTitle,
        description: translatedData.description,
        title: translatedData.title,
        free: translatedData.free,
        viewMore: translatedData.viewMore
    }

}