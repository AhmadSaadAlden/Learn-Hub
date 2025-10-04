'use client'
import { useTranslation } from "@/lib/i18n/useTranslation"
import SecondaryButtons from "@/shared/SecondaryButtons/SecondaryButtons"
import Image from "next/image"

export const Banner = () => {
    const { t } = useTranslation()

    return (
        <div className="relative mt-[70px] px-6 md:px-[70px] h-[300px]">
            <div className="relative w-full h-[250px]">
                <Image
                    src={t.Banner.img}
                    alt="banner"
                    fill
                    className="rounded-2xl"
                />

                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-2 md:px-4 py-8 md:py-0">
                    <div className="flex items-center gap-3 md:gap-5">
                        <Image
                            src={t.Banner.account}
                            alt="user"
                            className="w-[50px] h-[50px] md:w-[120px] md:h-[120px] object-cover rounded-full"
                        />
                        <h4 className="font-semibold text-lg md:text-xl text-black">
                            {t.Banner.title}
                        </h4>
                    </div>

                    <div className="flex gap-3 md:gap-5 mt-4 md:mt-0">
                        <SecondaryButtons text={t.Banner.OneBtn} />
                        <SecondaryButtons text={t.Banner.SecondBtn} />
                    </div>
                </div>
            </div>
        </div>
    )
}
