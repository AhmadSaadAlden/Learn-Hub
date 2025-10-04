'use client'
import Link from "next/link"
import { BiChevronDown } from "react-icons/bi"
import { Register } from "./Register/Register"
import { menuItems } from "@/data/menuItems"
import { useState } from "react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export const MenuItem = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null)
    const {t} = useTranslation()
    return (
        <>
            <ul className="flex items-center justify-center w-[521px] gap-1">
                {menuItems.map((item) => {
                    return (
                        <li key={item.id} 
                            className={`exo text-[16px] font-semibold w-[84px] h-[72px] flex items-center justify-center hover:bg-[var(--bg-hover-item)] hover:text-[var(--text-hover-item)]
                                ${activeItem === item.id ? "bg-[var(--bg-active-item)] text-[var(--text-active-item)]" : ""}
                            `}
                                onClick={() => setActiveItem(item.id)}
                        >
                            <Link href={item.href} className="flex">
                                <h5>{t.header[item.key]}</h5>
                                {item.hasDropdown && <BiChevronDown className="mt-1"/> }
                            </Link>
                        </li>
                    )
                })}
            </ul>
            {/** register */}
            <Register />
        </>
    )
}
