'use client'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { usePathname } from "next/navigation"
import { useTranslation } from "@/lib/i18n/useTranslation"

export const ItemPath = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)
  const {t, lang} = useTranslation()
  const dir = lang === "ar" ? "rtl" : "ltr"
  const getTranslatedPath = (t: any, segment: string) => {
    const pathTranslations = t.path || {};
    return pathTranslations[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
  }

  return (
    <div className="flex justify-center items-center gap-2 px-2"
          style={{ paddingRight: "70px", justifyContent: dir === "rtl" ? "flex-end" : "flex-start" }}
    >
      <p className="jost font-normal text-[16px] text-[var(--text-header)]">{t.path.homePage}</p>
        {pathSegments.map((segment, index) => (
        <div key={index} className="flex items-center gap-2">
          {dir === "rtl" ? (
            <BiChevronLeft className="w-4 h-4 text-[var(--icon-header)]"/> 
          ) : (
            <BiChevronRight className="w-4 h-4 text-[var(--icon-header)]"/>
          )}
          <p className="jost font-normal text-[16px] text-[var(--text-header)]">
            {getTranslatedPath(t, segment)}
          </p>
        </div>
        ))}
      
    </div>
  )
}