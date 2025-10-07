export interface Course {
    id: number;
    img: string;
    price: string;
    time: number;
    study: number;
    level: string;
    lessons: number;
    quizzes: number;
    sale: string
}

export const mockCoursesData: Course[] = [
    { id: 1, img: "/assets/images/FeaturedCourses/course1.png", sale: "39.0" ,price: "$29.0", time: 2 , study: 156, level: "All levels", lessons: 20, quizzes: 3 },
    { id: 2, img: "/assets/images/FeaturedCourses/course2.png", sale: "49.0" ,price: "$39.0", time: 3, study: 203, level: "All levels", lessons: 15, quizzes: 2 },
    { id: 3, img: "/assets/images/FeaturedCourses/course3.png", sale: "69.0" ,price: "$59.0", time: 5, study: 189, level: "All levels", lessons: 15, quizzes: 2 },
    { id: 4, img: "/assets/images/FeaturedCourses/course4.png", sale: "79.0" ,price: "$69.0", time: 6, study: 245, level: "All levels", lessons: 15, quizzes: 2 },
    { id: 5, img: "/assets/images/FeaturedCourses/course5.png", sale: "55.0" ,price: "$45.0", time: 4, study: 178, level: "All levels", lessons: 15, quizzes: 2 },
    { id: 6, img: "/assets/images/FeaturedCourses/course6.png", sale: "45.0" ,price: "$35.0", time: 3, study: 167, level: "All levels", lessons: 15, quizzes: 3 },
    { id: 7, img: "/assets/images/FeaturedCourses/course1.png", sale: "59.0" ,price: "$49.0", time: 4, study: 289, level: "All levels", lessons: 30, quizzes: 3 },
    { id: 8, img: "/assets/images/FeaturedCourses/course2.png", sale: "89.0" ,price: "$79.0", time: 8, study: 312, level: "All levels", lessons: 30, quizzes: 3 },
    { id: 9, img: "/assets/images/FeaturedCourses/course3.png", sale: "52.0" ,price: "$42.0", time: 4, study: 156, level: "All levels", lessons: 30, quizzes: 3 },
    { id: 10, img: "/assets/images/FeaturedCourses/course4.png", sale: "65.0" ,price: "$55.0", time: 5, study: 198, level: "All levels", lessons: 30, quizzes: 3 },
    { id: 11, img: "/assets/images/FeaturedCourses/course5.png", sale: "57.0" ,price: "$65.0", time: 6, study: 223, level: "All levels", lessons: 10, quizzes: 4 },
    { id: 12, img: "/assets/images/FeaturedCourses/course6.png", sale: "58.0" ,price: "$48.0", time: 4, study: 176, level: "All levels", lessons: 10, quizzes: 4 },
    { id: 13, img: "/assets/images/FeaturedCourses/course1.png", sale: "82.0" ,price: "$72.0", time: 7, study: 201, level: "All levels", lessons: 10, quizzes: 4 },
    { id: 14, img: "/assets/images/FeaturedCourses/course2.png", sale: "56.0" ,price: "$46.0", time: 4, study: 234, level: "All levels", lessons: 5, quizzes: 5 },
    { id: 15, img: "/assets/images/FeaturedCourses/course3.png", sale: "62.0" ,price: "$52.0", time: 5, study: 165, level: "All levels", lessons: 5, quizzes: 5 },
    { id: 16, img: "/assets/images/FeaturedCourses/course4.png", sale: "78.0" ,price: "$68.0", time: 6, study: 278, level: "All levels", lessons: 5, quizzes: 5 },
    { id: 17, img: "/assets/images/FeaturedCourses/course5.png", sale: "68.0" ,price: "$58.0", time: 5, study: 192, level: "All levels", lessons: 6, quizzes: 1 },
    { id: 18, img: "/assets/images/FeaturedCourses/course6.png", sale: "57.0" ,price: "$47.0", time: 4, study: 215, level: "All levels", lessons: 6, quizzes: 1 },
    { id: 19, img: "/assets/images/FeaturedCourses/course1.png", sale: "109.0" ,price: "$99.0", time: 10, study: 325, level: "All levels", lessons: 6, quizzes: 1 },
    { id: 20, img: "/assets/images/FeaturedCourses/course2.png", sale: "59.0" ,price: "$49.0", time: 4, study: 187, level: "All levels", lessons: 6, quizzes: 1 }
];
