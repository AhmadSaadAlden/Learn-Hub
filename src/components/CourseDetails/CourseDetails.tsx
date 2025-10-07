'use client'
import CourseForm from "./CourseForm/CourseForm"
import CourseTabs from "./CourseTabs/CourseTabs"
import CurriculumTab from "./CourseTabs/CurriculumTab"
import FAQsTab from "./CourseTabs/FAQsTab"
import InstructorTab from "./CourseTabs/InstructorTab"
import OverviewTab from "./CourseTabs/OverviewTab"
import ReviewsTab from "./CourseTabs/ReviewsTab"

const CourseDetails = () => {
  const tabs = [
    { id: 'overview', label: 'Overview', component: OverviewTab },
    { id: 'curriculum', label: 'Curriculum', component: CurriculumTab },
    { id: 'instructor', label: 'Instructor', component: InstructorTab },
    { id: 'faqs', label: 'FAQs', component: FAQsTab },
    { id: 'reviews', label: 'Reviews', component: ReviewsTab },
  ] as const

  return (
    <div>
      <CourseTabs tabs={tabs}  />
      <CourseForm />
    </div>
  )
}

export default CourseDetails