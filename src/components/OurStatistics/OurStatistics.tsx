/* 'use client'

import { useTranslation } from "@/lib/i18n/useTranslation"
import { OurStatisticsCard } from "../Card/OurStatisticsCard"

export const OurStatistics = () => {
    const {t} = useTranslation()
  return (
    <div className="mt-[70px] px-6 md:px-[70px] bg-[var(--FeaturedCourses-bg)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {t.OurStatistics.map((item:any, index:number) => (
                <OurStatisticsCard card={item} key={index}/>
            ))}
        </div>
        
    </div>
  )
}
 */

'use client'

import { useTranslation } from "@/lib/i18n/useTranslation"
import { OurStatisticsCard } from "../Card/OurStatisticsCard"

export const OurStatistics = () => {
  const { t } = useTranslation()
  return (
    <div className="mt-[70px] px-6 md:px-[70px] bg-[var(--FeaturedCourses-bg)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {t.OurStatistics.map((item: any, index: number) => (
          <OurStatisticsCard card={item} key={index} />
        ))}
      </div>
    </div>
  )
}
