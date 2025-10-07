'use client'
import React, { useState } from "react"
import OverviewTab from "./OverviewTab"
import CurriculumTab from "./CurriculumTab"
import InstructorTab from "./InstructorTab"
import FAQsTab from "./FAQsTab"
import ReviewsTab from "./ReviewsTab"

type TabType = 'overview' | 'curriculum' | 'instructor' | 'faqs' | 'reviews'

interface Tab {
  id: TabType
  label: string
  component : React.ComponentType<any>
}

interface CourseTabProps {
  tabs: readonly Tab[]
}

const CourseTabs = ({tabs}: CourseTabProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />
      case 'curriculum':
        return <CurriculumTab />
      case 'instructor':
        return <InstructorTab />
      case 'faqs' :
        return <FAQsTab />
      case 'reviews':
        return <ReviewsTab />

      default:
        return <OverviewTab />
    }
  }

  return (
    <>
      <div className="flex border-b border-gray-200 mb-6 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === tab.id 
                ? 'text-orange-600 border-orange-400' 
                : ' text-[var(--courseTabs-text)] border-transparent hover:text-orange-600 hover:border-orange-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* محتوى التبويب */}
      <div className="prose max-w-none bg-[var(--courseTabs-bg)] rounded-[20px]  px-8 py-8">
        {renderActiveTab()}
      </div>
    </>
  )
}

export default CourseTabs