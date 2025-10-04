import en from "./en";
import ar from "./ar";

export const translations = { en, ar };

export type LangState = keyof typeof translations
export type TranslationSchema = typeof en
