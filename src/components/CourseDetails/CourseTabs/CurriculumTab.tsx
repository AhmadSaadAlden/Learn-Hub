'use client'

import { useState } from "react"
import { FaCheck, FaChevronDown, FaChevronUp, FaCopy, FaLock } from "react-icons/fa"

const CurriculumTab = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
  
  const curriculumData = [
    {
      title: "Lessons With Video Content",
      lessons: "3 Lessons",
      duration: "45 Mins",
      items: [
        { type: "Lessons with video content", btn: "Preview", duration: "12:30", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "10:05", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "2:25", icon: <FaLock /> }
      ]
    },
    {
      title: "Lessons With Video Content",
      lessons: "5 Lessons",
      duration: "45 Mins",
      items: [
        { type: "Lessons with video content", btn: "Preview", duration: "15:20", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "8:45", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "5:30", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "10:15", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "5:10", icon: <FaLock /> }
      ]
    },
    {
      title: "Lessons With Video Content",
      lessons: "5 Lessons",
      duration: "45 Mins",
      items: [
        { type: "Lessons with video content", btn: "Preview", duration: "12:00", icon: <FaCheck />  },
        { type: "Lessons with video content", btn: "Preview", duration: "18:30", icon: <FaCheck />  },
        { type: "Lessons with video content", btn: "Preview", duration: "7:45", icon: <FaCheck />  },
        { type: "Lessons with video content", btn: "Preview", duration: "4:20", icon: <FaCheck />  },
        { type: "Lessons with video content", btn: "Preview", duration: "2:45", icon: <FaLock />  }
      ]
    },
    {
      title: "Lessons With Video Content",
      lessons: "5 Lessons",
      duration: "45 Mins",
      items: [
        { type: "Lessons with video content", btn: "Preview", duration: "15:20", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "8:45", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "5:30", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "10:15", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "5:10", icon: <FaLock />  }
      ]
    },
    {
      title: "Lessons With Video Content",
      lessons: "5 Lessons",
      duration: "45 Mins",
      items: [
        { type: "Lessons with video content", btn: "Preview", duration: "12:00", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "18:30", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "7:45", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "4:20", icon: <FaCheck /> },
        { type: "Lessons with video content", btn: "Preview", duration: "2:45", icon: <FaLock /> }
      ]
    }
  ]

  const toggleAccordion = (index: number) => {
    if (openAccordion === index) {
      setOpenAccordion(null)
    } else {
      setOpenAccordion(index)
    }
  }

  return (
    <div>
      <p className="jost font-normal text-xs md:text-base text-gray-600">
        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.
      </p>

      <div className="mt-5 space-y-3">
        {curriculumData.map((section, index) => (
          <div 
            key={index}
            className={`bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 ${
              openAccordion === index ? 'shadow-md' : ''
            }`}
          >
            <div 
              className="flex justify-between items-center gap-5 p-5 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center gap-2">
                {openAccordion === index ? (
                  <FaChevronUp className="text-gray-500 w-3 h-3" />
                ) : (
                  <FaChevronDown className="text-gray-500 w-3 h-3" />
                )}
                <p className="font-semibold text-xs md:text-base hover:text-orange-400 cursor-pointer text-black">
                  {section.title}
                </p>
              </div>
              
              <div className="flex justify-between items-center gap-5">
                <span className="jost font-normal text-xs md:text-base text-gray-600">{section.lessons}</span>
                <span className="jost font-normal text-xs md:text-base text-gray-600">{section.duration}</span>
              </div>
            </div>

            {/* محتوى الـ Accordion */}
            <div 
              className={`transition-all duration-300 overflow-hidden ${
                openAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-t border-gray-100">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex justify-between items-center py-3 px-2 hover:bg-gray-50 rounded cursor-pointer transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 px-10">
                      <FaCopy className="text-gray-400 w-3 h-3" />
                      <span className="text-sm text-gray-700">{item.type}</span>
                    </div>
                    
                    <div className="flex justify-between items-center gap-5 pr-5">
                      <button className="bg-blue-500 text-white w-[76px] h-8 rounded-lg flex justify-center items-center cursor-pointer hover:bg-blue-600 transition-colors">
                        {item.btn}
                      </button>
                      <span className="text-sm text-gray-500">{item.duration}</span>
                      <span className="text-gray-500 w-2.5 h-2">{item.icon}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CurriculumTab