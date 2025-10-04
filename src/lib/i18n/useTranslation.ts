'use client'
import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import { translations } from "./locales"

export const useTranslation = () => {
  const lang = useSelector((state: RootState) => state.language.lang)
  const t = translations[lang]
  return { lang, t }
}