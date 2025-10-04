'use client'
import { useState } from "react"
import { ItemPath } from "./ItemPath/ItemPath"
import { Navbar } from "./Navbar/Navbar"

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full shadow-md z-50 bg-[var(--background)] text-[var(--foreground)]">
            <div className="px-[70px]">
                <div className="py-2 md:py-0">
                    <Navbar />
                </div>
            </div>
            <div className="w-full flex justify-start items-center h-[60px] pl-[70px] bg-[var(--bg-header)] text-[var(--foreground)] my-1 md:my-0">
                <ItemPath />
            </div>
        </header>
    )
}
