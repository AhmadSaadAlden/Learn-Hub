'use client'
import { useTranslation } from "@/lib/i18n/useTranslation"
import Image from "next/image"
import Link from "next/link"

export const Hero = () => {
    const {t,lang} = useTranslation()
    
    return (
        <section className="relative w-full h-[400px] md:h-[577px]">
            <Image
                src={t.dataHero.img}
                alt="Background"
                fill
                className={`object-cover ${lang === "ar" ? "scale-x-[-1]" : ""}`}
            />

            <div className="relative z-10 flex flex-col justify-center items-center md:items-start h-full md:max-w-[520px] px-6 md:px-[var(--page-padding)]">
                <h1 className="text-2xl md:text-5xl font-semibold text-[var(--hero-title)] mb-4 leading-snug md:leading-tight max-w-[90%] md:max-w-[520px] text-center md:text-start">
                    {t.dataHero.title}
                </h1>
                <p className="max-w-[90%] md:max-w-[520px] text-sm lg:text-[18px] jost font-normal text-[var(--hero-para)] mb-6 text-center md:text-start">
                    {t.dataHero.desc}
                </p>
                <Link href={"#"} className="w-[140px] md:w-[170px] h-10 md:h-12 rounded-3xl bg-[var(--btn)] text-white flex justify-center items-center text-sm md:text-base">
                    {t.dataHero.btn}
                </Link>
            </div>
        </section>
    )
}
