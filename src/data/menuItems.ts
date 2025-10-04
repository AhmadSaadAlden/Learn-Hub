import { MenuItem } from "@/interfaces"
import { TranslationSchema } from "@/lib/i18n/locales"

export type MenuKey = keyof TranslationSchema["header"]

export const menuItems: MenuItem[] = [
  { id: 1, key: "home", href: "/" },
  { id: 2, key: "courses", href: "/courses" },
  { id: 3, key: "blog", href: "/blog", hasDropdown: true },
  { id: 4, key: "page", href: "/page" },
  { id: 5, key: "premiumTheme", href: "/premiumTheme" },
]
