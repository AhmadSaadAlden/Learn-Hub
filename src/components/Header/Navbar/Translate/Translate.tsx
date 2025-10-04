'use client'
import { setLanguage } from "@/lib/redux/slices/languageSlice"
import { RootState } from "@/lib/redux/store/store"
import { useDispatch, useSelector } from "react-redux"

export const Translate = ({ mobile = false }) => {
  const currentLang = useSelector((state : RootState) => state.language.lang)
  const dispatch = useDispatch()
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value as "en" | "ar"
    dispatch(setLanguage(lang))
  }

  return (
    <div className={mobile ? "w-24" : ""}>
      <select 
        name="lang"
        value={currentLang}
        onChange={handleLanguageChange}
        className={`border rounded-md p-1 focus:outline-none bg-[var(--bg-header)] text-[var(--text-header)] ${
          mobile ? "w-full" : "w-15"
        }`}
      >
        <option value="ar">العربية</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}
