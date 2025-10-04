'use client'

import { useTranslation } from "@/lib/i18n/useTranslation"
import SecondaryButtons from "@/shared/SecondaryButtons/SecondaryButtons"
import Image from "next/image"
import { FaCheck } from "react-icons/fa"

export const Skills = () => {
    const {t} = useTranslation()
    return (
        <div className="mt-[70px] px-6 md:px-[70px] bg-[var(--FeaturedCourses-bg)] w-full md:h-[469px] flex flex-col md:flex-row justify-between items-center gap-10 md:gap-32">
            <div className="flex-shrink-0">
                <Image 
                    src={t.skills.img} 
                    alt="skills"
                    className="max-w-full h-auto"
                />
            </div>
            <div className="max-w-[520px] md:h-[384px] text-center md:text-left">
                <h2 className="font-semibold text-2xl md:text-3xl text-[var(--skills-title)]">{t.skills.title}</h2>
                <p className="jost font-normal text-base md:text-lg text-[var(--skills-description)] pt-6">{t.skills.description}</p>
                <div className="flex flex-col gap-3 pt-4">
                    {t.skills.list.map((item: string, index: number) => (
                        <span key={index} className="flex items-center gap-2 jost font-normal text-base md:text-lg text-[var(--skills-list)]">
                            <FaCheck className="text-green-600" /> {item}
                        </span>
                    ))}
                </div>
                <SecondaryButtons text={t.skills.btn} className="mt-5"/>
            </div>
        </div>
    )
}
