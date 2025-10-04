'use client'
import GlobalHeading from '@/shared/GlobalHeading/GlobalHeading'
import { PrimaryCard } from '../Card/PrimaryCard'
import { useTranslation } from '@/lib/i18n/useTranslation'

export const TopCategories = () => {
    const { t } = useTranslation()

    return (
        <div className='px-[var(--page-padding)] mt-14 w-full space-y-[50px]'>
            <div>
                <GlobalHeading 
                    title={t.dataTopCategories.title} 
                    description={t.dataTopCategories.descrption}
                    btntext={t.dataTopCategories.btn}
                    className={'w-[161px] h-[48px] rounded-3xl border-2 border-[var(--TopCategories-border-btn)] outline-none cursor-pointer font-medium text-[18px] text-[var(--TopCategories-btn)]'}
                />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center'>
                {t.TopCategoriesCardData.map((item: any, index: number) => (
                    <PrimaryCard key={index} card={item} />
                ))}
            </div>
        </div>
    )
}
