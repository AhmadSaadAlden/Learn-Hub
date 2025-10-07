//Top Categoroes
import img1 from "../../../../public/assets/images/TopCategories/category1.svg"
import img2 from "../../../../public/assets/images/TopCategories/category2.svg"
import img3 from "../../../../public/assets/images/TopCategories/category3.svg"
import img4 from "../../../../public/assets/images/TopCategories/category4.svg"
import img5 from "../../../../public/assets/images/TopCategories/category5.svg"
import img6 from "../../../../public/assets/images/TopCategories/category6.svg"
import img7 from "../../../../public/assets/images/TopCategories/category7.svg"
import img8 from "../../../../public/assets/images/TopCategories/category8.svg"
import bg from "../../../../public/assets/images/hero/hero-bg.png"
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

const ar = {
    header: {
        home: "الرئيسية",
        courses: "الكورسات",
        blog: "المدونة",
        page: "الصفحة",
        premiumTheme: "ثيم مميز",
    },

    account: {
        img: profile,
        profile: "الملف الشخصي",
        dashboard: "لوحة التحكم",
        logout: "تسجيل الخروج"
    },

    btn: {
        login : "تسجيل الدخول"
    },
    path: {
        homePage: "الصفحة الرئيسية",
        home: "الرئيسية",
        courses: "الكورسات",
        blog: "المدونة",
        page: "الصفحة",
        premiumTheme: "ثيم مميز",
    },
    footer: {
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        oneColTitle: "احصل على مساعدة",
        twoColTitle: "برامج",
        threeColTitle: "تواصل معنا",
        OneColOnelink: "تواصل معنا",
        OneColTwolink: "أحدث المقالات",
        OneColThreelink: "أسئلة متكررة",
        twoColOnelink: "فن وتصميم",
        twoColTwolink: "الاعمال",
        twoColThreelink: "تكنولوجيا المعلومات والبرمجيات",
        twoColFourlink: "اللغات",
        twoColFivelink: "البرمجة",
        threeColOnePara: "العنوان: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA",
        threeColTwoPara: "الهاتف: + (123) 2500-567-8988",
        threeColThreePara: "الايميل: supportlms@gmail.com",
        secondFooter: "حقوق الطبع والنشر © 2024 LearnPress LMS | مدعوم بواسطة ThimPress"
    },
    login: {
        title: "تسجيل الدخول",
        labelEmail: "الايميل او اسم المستخدم*",
        labelPassword: "كلمة السر*",
        Remember: "تذكرني",
        btn: "تسجيل الدخول",
        footerText: "هل فقدت كلمة السر?",
        linkText: " اضغط هنا",
        linkRegister: "انشاء حساب",
    },
    signup: {
        labelFirst_name: "الاسم الأول*",
        labelLast_name: "الاسم الأخير*",
        labelUser_name: "اسم المستخدم*",
        title: "تسجيل حساب",
        labelEmail: "الايميل**",
        labelPassword: "كلمة السر*",
        labelPassword_confirmation: "تأكيد كلمة السر*",
        btn: "تسجيل الحساب",
        footerText: "هل فقدت كلمة السر?",
        linkText: " اضغط هنا",
        linkRegister: "تسجيل الدخول",
        labelProfile_image: "صورة الملف الشخصي"
    },
    common: {
        loading: "جاري التحميل..."
    },

    //Hero
    dataHero:{
        img: bg,
        title: "بناء مهارات مع كورسات اون لاين",
        desc: "ندين بكل استياء righteous ورفض الرجال الذين تم خداعهم وإضعافهم لدرجة أنهم لا يستطيعون إزعاج.",
        btn: "تعليق على منشور",
    },

    //TopCategories
    dataTopCategories:{
        title: "أهم الفئات",
        descrption: "استكشف فئاتنا الشائعة",
        btn: "جميع الفئات",
    },
    TopCategoriesCardData: [
        {img: img1, title: "فن وتصميم", descrption: "38 كورس"},
        {img: img2, title: "تطوير", descrption: "38 كورس"},
        {img: img3, title: "تواصل", descrption: "38 كورس" },
        {img: img4, title: "تصوير الفيديو", descrption: "38 كورس"} ,
        {img: img5, title: "تسويق", descrption: "38 كورس" },
        {img: img6, title: "كتابة محتوى", descrption: "38 كورس" },
        {img: img7, title: "تمويل", descrption: "38 كورس"} ,
        {img: img8, title: "علم", descrption: "38 كورس"} ,
    ],

    //FeaturedCourses
    FeaturedCourses: {
        title: "ميزات الكورس",
        descrption: "استكشف دوراتنا الشائعة",
        btn: "كل الكورسات",
    },
    FeaturedCoursesCardData: [
        {img: course1 , imgTitle: "تصوير الفوتوغرافي", descrption: "بواسطة ديتيرمينايد-بويتراس", title: "إنشاء موقع LMS باستخدام LearnPress", time: "أسبوعين", study:"156 طالباً", price: "$29.0", free: "مجاني", viewMore: "عرض المزيد"} ,
        {img: course2 , imgTitle: "تصوير الفوتوغرافي", descrption: "بواسطة ديتيرمينايد-بويتراس", title: "إنشاء موقع LMS باستخدام LearnPress", time: "أسبوعين", study:"156 طالباً", price: "$29.0", free: "مجاني", viewMore: "عرض المزيد"} ,
        {img: course3 , imgTitle: "تصوير الفوتوغرافي", descrption: "بواسطة ديتيرمينايد-بويتراس", title: "إنشاء موقع LMS باستخدام LearnPress", time: "أسبوعين", study:"156 طالباً", price: "$29.0", free: "مجاني", viewMore: "عرض المزيد"} ,
    ],

    //AddOns
    AddOns: {
        img: AddOns,
        para: "احصل على مزيد من القوة من",
        title: "إضافات ليرن بريس",
        descrption: "المستوى التالي من LearnPress - إضافة نظام إدارة التعلم لـ WordPress. أكثر قوة ومرونة وسحرًا من الداخل.",
        btn: "استكشف الكورس" 
    },

    //OurStatistics
    OurStatistics: [
        {total: "25K+", title: "الطلاب النشطون"},
        {total: "899", title: "إجمالي الدورات"},
        {total: "158", title: "مدرب"},
        {total: "100%", title: "معدل الرضا"},
    ],

    //skills
    skills: {
        img: skills, 
        title: "نمى مهارتك معنا من خلال نظام إدارة التعلم LearnPress", 
        description: "ندين بكل استياء righteous ورفض الرجال الذين تم خداعهم وإضعافهم لدرجة أنهم لا يستطيعون إزعاج.", 
        list: ["شهادة", "شهادة", "شهادة", "شهادة"], 
        btn: "استكشف دورات"
    },

    //Banner
    Banner: { 
        img: banner, account: user, 
        title: "لنبدأ مع أكاديمية LMS", 
        OneBtn: "أنا طالب", 
        SecondBtn: "كن مدربًا"
    },

    //courses
    coursesDataHeading: {
        title:  "كل الكورسات", 
        search:  "البحث",
    },

    courses: {
        1: { imgTitle: "التصوير", description: "بواسطة ديتيرميد بويتراس", title: "إنشاء موقع LMS باستخدام LearnPress", free: "مجاني", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        2: { imgTitle: "التصميم", description: "بواسطة استوديو إبداعي", title: "أساسيات تصميم UI/UX", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        3: { imgTitle: "التسويق", description: "بواسطة خبراء رقميين", title: "استراتيجيات التسويق الرقمي", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        4: { imgTitle: "علوم البيانات", description: "بواسطة علماء بيانات", title: "بايثون لتحليل البيانات", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        5: { imgTitle: "الأعمال", description: "بواسطة قادة الأعمال", title: "ريادة الأعمال 101", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        6: { imgTitle: "التصوير", description: "بواسطة مصورين محترفين", title: "تقنيات التصوير المتقدمة", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        7: { imgTitle: "تطوير الويب", description: "بواسطة أساتذة التقنية", title: "برمجة JavaScript متقدمة", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        8: { imgTitle: "اللغات", description: "بواسطة خبراء لغات", title: "الإسبانية للمبتدئين", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        9: { imgTitle: "الموسيقى", description: "بواسطة أساتذة موسيقى", title: "أساسيات العزف على الجيتار", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        10: { imgTitle: "الصحة", description: "بواسطة مدربي لياقة", title: "التغذية والعافية", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        11: { imgTitle: "تكنولوجيا المعلومات", description: "بواسطة محترفي IT", title: "أساسيات أمن الشبكات", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        12: { imgTitle: "الكتابة", description: "بواسطة مؤلفين منشورين", title: "ورشة الكتابة الإبداعية", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        13: { imgTitle: "العلوم", description: "بواسطة معلمي العلوم", title: "مقدمة في علم الفلك", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        14: { imgTitle: "المالية", description: "بواسطة مستشارين ماليين", title: "إدارة التمويل الشخصي", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        15: { imgTitle: "الفن", description: "بواسطة فنانين محترفين", title: "تقنيات الرسم الزيتي", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        16: { imgTitle: "البرمجة", description: "بواسطة خبراء الكود", title: "دليل شامل لـ React.js", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        17: { imgTitle: "الأعمال", description: "بواسطة خبراء الإدارة", title: "تطوير مهارات القيادة", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        18: { imgTitle: "التصميم", description: "بواسطة خبراء التصميم", title: "تقنيات الفوتوشوب المتقدمة", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        19: { imgTitle: "التطوير", description: "بواسطة سحرة الويب", title: "تطوير ويب متكامل Full-Stack", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" },
        20: { imgTitle: "التسويق", description: "بواسطة مختصي SEO", title: "استراتيجيات SEO متقدمة", free: "مدفوع", viewMore: "عرض المزيد", level: "كل المستويات", lesson: "فصل", quizze: "اختبار", btn: "ابدء الأن", times: "اسبوع", student: "طلاب" }
    }
} 

export default ar;
