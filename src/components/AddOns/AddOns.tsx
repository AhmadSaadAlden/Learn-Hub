/* 'use client'

import { useTranslation } from "@/lib/i18n/useTranslation"
import SecondaryButtons from "@/shared/SecondaryButtons/SecondaryButtons"
import Image from "next/image"
import Link from "next/link"

export const AddOns = () => {
    const {t} = useTranslation()
    return (
        <div className="relative mt-[70px] px-6 md:px-[70px] bg-[var(--FeaturedCourses-bg)]">
            <div className="relative w-full">
                <Image
                    src={t.AddOns.img}
                    alt="img"
                    width={1200}
                    height={400}
                    className="w-full h-auto rounded-2xl object-cover"
                />
                <div className="absolute top-1/3 left-14 -translate-y-1/2 max-w-[450px] h-[215px] px-12 py-14">
                    <div className="space-y-3">
                        <p className="font-semibold text-sm md:text-base text-[var(--AddOns-para)]">{t.AddOns.para}</p>
                        <h2 className="font-semibold text-2xl md:text-[32px] text-[var(--AddOns-title)]">{t.AddOns.title}</h2>
                    </div>
                    <div className="pt-6 space-y-5">
                        <p className="jost font-normal text-base md:text-lg text-[var(--AddOns-description)]">{t.AddOns.descrption}</p>
                        <Link href={"#"}>
                            <SecondaryButtons 
                                text={t.AddOns.btn} 
                                className="inline-block"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
 */
'use client'

import { useTranslation } from "@/lib/i18n/useTranslation"
import SecondaryButtons from "@/shared/SecondaryButtons/SecondaryButtons"
import Image from "next/image"
import Link from "next/link"

export const AddOns = () => {
    const { t, lang } = useTranslation()
    return (
        <div className="relative mt-[70px] px-6 md:px-[70px] bg-[var(--FeaturedCourses-bg)]">
            <div className="relative w-full rounded-2xl overflow-hidden">
                <Image
                    src={t.AddOns.img}
                    alt="img"
                    width={1200}
                    height={324}
                    className={`w-full h-[220px] sm:h-[300px] md:h-[324px] rounded-2xl ${lang == "ar" ? "scale-x-[-1]" : ""}`}
                />

                <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-8">
                    <div className="max-w-[90%] sm:max-w-[450px] space-y-2 sm:space-y-4">
                        <p className="font-semibold text-xs sm:text-sm md:text-base text-[var(--AddOns-para)]">
                            {t.AddOns.para}
                        </p>
                        <h2 className="font-semibold text-lg sm:text-2xl md:text-[32px] text-[var(--AddOns-title)] leading-snug">
                            {t.AddOns.title}
                        </h2>
                        <p className="jost font-normal text-xs sm:text-sm md:text-lg text-[var(--AddOns-description)]">
                            {t.AddOns.descrption}
                        </p>
                        <Link href="#" className="inline-block pt-2">
                            <SecondaryButtons text={t.AddOns.btn} className="text-xs sm:text-sm md:text-base" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


