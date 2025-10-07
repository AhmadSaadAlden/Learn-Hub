//hero
import bg from "../../../../public/assets/images/hero/hero-bg.png"
//Top Categoroes
import img1 from "../../../../public/assets/images/TopCategories/category1.svg"
import img2 from "../../../../public/assets/images/TopCategories/category2.svg"
import img3 from "../../../../public/assets/images/TopCategories/category3.svg"
import img4 from "../../../../public/assets/images/TopCategories/category4.svg"
import img5 from "../../../../public/assets/images/TopCategories/category5.svg"
import img6 from "../../../../public/assets/images/TopCategories/category6.svg"
import img7 from "../../../../public/assets/images/TopCategories/category7.svg"
import img8 from "../../../../public/assets/images/TopCategories/category8.svg"
//FeaturedCourses
import course1 from "../../../../public/assets/images/FeaturedCourses/course1.png"
import course2 from "../../../../public/assets/images/FeaturedCourses/course2.png"
import course3 from "../../../../public/assets/images/FeaturedCourses/course3.png"
import course4 from "../../../../public/assets/images/FeaturedCourses/course4.png"
import course5 from "../../../../public/assets/images/FeaturedCourses/course5.png"
import course6 from "../../../../public/assets/images/FeaturedCourses/course6.png"
//AddOns
import AddOns from "../../../../public/assets/images/AddOns/AddOns.png"
//Skills
import skills from "../../../../public/assets/images/skills/skills.png"
//Banner
import banner from "../../../../public/assets/images/Banner/banner.png"
import user from "../../../../public/assets/images/Banner/user.png"
//profile
import profile from "../../../../public/assets/images/Navbar/profile.jpg"
const en = {
    header: {
        home: "Home",
        courses: "Courses",
        blog: "Blog",
        page: "Page",
        premiumTheme: "Premium Theme",
    },

    account: {
        img: profile,
        profile: "Profile",
        dashboard: "dashboard",
        logout: "Logout"
    },

    btn: {
        login : "LogIn"
    },
    path: {
        homePage: "HomePage",
        home: "Home",
        courses: "Courses",
        blog: "Blog",
        page: "Page",
        premiumTheme: "Premium Theme",
    },
    footer: {
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        oneColTitle: "GET HELP",
        twoColTitle: "PROGRAMS",
        threeColTitle: "CONTACT US",
        OneColOnelink: "Contact Us",
        OneColTwolink: "Latest Articles",
        OneColThreelink: "FAQ",
        twoColOnelink: "Art & Design",
        twoColTwolink: "Business",
        twoColThreelink: "IT & Software",
        twoColFourlink: "Languages",
        twoColFivelink: "Programming",
        threeColOnePara: "Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA",
        threeColTwoPara: "Tel: + (123) 2500-567-8988",
        threeColThreePara: "Mail: supportlms@gmail.com",
        secondFooter: "Copyright © 2024 LearnPress LMS | Powered by ThimPress"
    },
    login: {
        title: "Login",
        labelEmail: "Email or username*",
        labelPassword: "Password*",
        Remember: "RemberMe",
        btn: "Login",
        footerText: "Lost your password?",
        linkText: " click here",
        linkRegister: "create account",
    },
    signup: {
        labelFirst_name: "First Name*",
        labelLast_name: "Last Name*", 
        labelUser_name: "User Name*",
        title: "Register",
        labelEmail: "Email**",
        labelPassword: "Password*",
        labelPassword_confirmation: "Confirm Password*",
        btn: "Register",
        footerText: "Lost your password?",
        linkText: " click here",
        linkRegister: "login account",
        labelProfile_image: "Profile Image"
    },
    common: {
        loading: "Loading..."
    },

    //Hero
    dataHero:{
        img: bg,
        title: "Build Skills With Online Courses",
        desc: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.",
        btn: "Posts comment",
    },

    //TopCategories
    dataTopCategories: {
        title: "Top Categories",
        descrption: "Explore our Popular Categories",
        btn: "All categories",
    },
    TopCategoriesCardData: [
        {img: img1, title: "Art & Design", descrption: "38 Courses"} ,
        {img: img2, title: "Development", descrption: "38 Courses"} ,
        {img: img3, title: "Communication", descrption: "38 Courses"} ,
        {img: img4, title: "Videography", descrption: "38 Courses" },
        {img: img5, title: "Marketing", descrption: "38 Courses"} ,
        {img: img6, title: "Content writing", descrption: "38 Courses"} ,
        {img: img7, title: "Finance", descrption: "38 Courses"} ,
        {img: img8, title: "Science", descrption: "38 Courses"} ,
    ],

    //FeaturedCourses
    FeaturedCourses: {
        title: "Featured courses",
        descrption: "Explore our Popular Courses",
        btn: "All courses",
    },
    FeaturedCoursesCardData: [
        {img: course1 ,imgTitle: "Photography", descrption: "by Determined-Poitras", title: "Create an LMS Website with LearnPress", time: "2Weeks", study:"156 Students", price: "$29.0", free: "Free", viewMore: "View more"} ,
        {img: course2 ,imgTitle: "Photography", descrption: "by Determined-Poitras", title: "Create an LMS Website with LearnPress", time: "2Weeks", study:"156 Students", price: "$29.0", free: "Free", viewMore: "View more"} ,
        {img: course3 ,imgTitle: "Photography", descrption: "by Determined-Poitras", title: "Create an LMS Website with LearnPress", time: "2Weeks", study:"156 Students", price: "$29.0", free: "Free", viewMore: "View more"} ,
    ],

    //AddOns
    AddOns: {
        img: AddOns,
        para: "GET MORE POWER FROM",
        title: "LearnPress Add-Ons",
        descrption: "The next level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside.",
        btn: "Explorer course" 
    },

    //OurStatistics
    OurStatistics: [
        {total: "25K+", title: "Active Students"},
        {total: "899", title: "Total Courses"},
        {total: "158", title: "Instructor"},
        {total: "100%", title: "Satisfaction rate"},
    ],

    //skills
    skills: {
        img: skills, 
        title: "Grow us your skill with LearnPress LMS", 
        description: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.", 
        list: ["Certification", "Certification", "Certification", "Certification"], 
        btn: "Explorer course"
    },

    //Banner
    Banner: { 
        img: banner, 
        account: user, 
        title: "Let’s Start With Academy LMS", 
        OneBtn: "I’m a student", 
        SecondBtn: "Become an Instructor"
    },

    //courses
    coursesDataHeading: {
        title: "All Courses", 
        search: "search",
    },

    courses: {
        1: { imgTitle: "Photography", description: "by Determined-Poitras", title: "Create an LMS Website with LearnPress", free: "Free", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        2: { imgTitle: "Design", description: "by Creative Studio", title: "UI/UX Design Fundamentals", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        3: { imgTitle: "Marketing", description: "by Digital Experts", title: "Digital Marketing Strategies", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        4: { imgTitle: "Data Science", description: "by Data Scientists", title: "Python for Data Analysis", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        5: { imgTitle: "Business", description: "by Business Leaders", title: "Entrepreneurship 101", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        6: { imgTitle: "Photography", description: "by Pro Photographers", title: "Advanced Photography Techniques", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        7: { imgTitle: "Web Development", description: "by Tech Masters", title: "Advanced JavaScript Programming", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        8: { imgTitle: "Languages", description: "by Language Experts", title: "Spanish for Beginners", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        9: { imgTitle: "Music", description: "by Music Masters", title: "Guitar Fundamentals", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        10: { imgTitle: "Health", description: "by Fitness Coaches", title: "Nutrition and Wellness", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        11: { imgTitle: "IT", description: "by IT Professionals", title: "Network Security Basics", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        12: { imgTitle: "Writing", description: "by Published Authors", title: "Creative Writing Workshop", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        13: { imgTitle: "Science", description: "by Science Educators", title: "Introduction to Astronomy", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        14: { imgTitle: "Finance", description: "by Financial Advisors", title: "Personal Finance Management", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        15: { imgTitle: "Art", description: "by Professional Artists", title: "Oil Painting Techniques", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        16: { imgTitle: "Programming", description: "by Code Masters", title: "Complete React.js Guide", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        17: { imgTitle: "Business", description: "by Management Experts", title: "Leadership Skills Development", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        18: { imgTitle: "Design", description: "by Design Gurus", title: "Advanced Photoshop Techniques", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        19: { imgTitle: "Development", description: "by Web Wizards", title: "Full-Stack Web Development", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" },
        20: { imgTitle: "Marketing", description: "by SEO Specialists", title: "Advanced SEO Strategies", free: "Paid", viewMore: "View more", level: "All levels", lesson: "lessons", quizze: "Quizzes", btn: "Start Now", times: "weeks", student: "Students" }
    }
}

export default en;
