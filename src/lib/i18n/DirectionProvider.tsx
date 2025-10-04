"use client";
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { RootState } from "../redux/store/store";
import { initializeLanguage, setLanguage } from "../redux/slices/languageSlice";

export const DirectionProvider = ({ children }: { children: React.ReactNode }) => {
  const language = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch()
  const [mounted, setMounted] = useState(false);

// get value from local storage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang")
    if (savedLang == "ar" || savedLang == "en") {
      dispatch(setLanguage(savedLang))
    }
    dispatch(initializeLanguage())
    setMounted(true)
  }, [dispatch]);

  // whaen mounted send value to local storage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("lang", language.lang)
      document.documentElement.lang = language.lang
      document.documentElement.dir = language.dir
    }
  }, [language.dir, language.lang, mounted])

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return <div dir={language.dir}>{children}</div>;
};
