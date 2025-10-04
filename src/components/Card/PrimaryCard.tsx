'use client'
import { useTranslation } from "@/lib/i18n/useTranslation"
import Image from "next/image"

interface TopCategoriesCardType {
    img: string
    title: string
    descrption: string
}

interface TopCategoriesCardProps {
    card: TopCategoriesCardType
}

export const PrimaryCard = ({ card }: TopCategoriesCardProps) => {
    return (
        <div className="w-[234px] h-[234px] rounded-[20px] flex flex-col items-center gap-6 cursor-pointer p-6 
                border border-[var(--TopCategories-border-card)] shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 ease-in-out">
            {card.img && 
                <Image src={card.img} alt={card.title} className="w-8 h-8 mb-3" />
            }
            <div className="space-y-3 text-center">
                <h4 className="font-semibold text-[20px] text-[var(--TopCategories-title-card)] hover:text-[var(--primary-text-hover)]">
                    {card.title}
                </h4>
                <p className="jost font-normal text-[18px] text-[var(--TopCategories-para-card)]">
                    {card.descrption}
                </p>
            </div>
        </div>
    )
}
