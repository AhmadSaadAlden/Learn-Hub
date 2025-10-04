'use Client'
import { useTranslation } from "@/lib/i18n/useTranslation"
import GlobalHeading from "@/shared/GlobalHeading/GlobalHeading"
import { SecondaryCard } from "../Card/SecondaryCard"

export const FeaturedCourses = () => {
    const {t} = useTranslation()

    return (
        <div className="mt-[70px] px-[70px] bg-[var(--FeaturedCourses-bg)]  w-full space-y-[50px]">
            <div>
                <GlobalHeading 
                    title={t.FeaturedCourses.title}
                    description={t.FeaturedCourses.descrption}
                    btntext={t.FeaturedCourses.btn}
                    className={'w-[161px] h-[48px] rounded-3xl border-2 border-[var(--TopCategories-border-btn)] outline-none cursor-pointer font-medium text-[18px] text-[var(--TopCategories-btn)]'}
                />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center'>
                {t.FeaturedCoursesCardData.map((item: any, index: number)=> (
                    <SecondaryCard key={index} card={item}/>
                ))}
            </div>
        </div>
    )
}
