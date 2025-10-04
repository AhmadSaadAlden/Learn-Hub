'use client'
import Image from "next/image"
import { FaBars, FaSearch } from "react-icons/fa"
import { MenuItem } from "./MenuItem/MenuItem"
import { Translate } from "./Translate/Translate"
import { DarkLightToggle } from "./DarkLightToggle/DarkLightToggle"
import { FaX } from "react-icons/fa6"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { BiChevronDown } from "react-icons/bi"
import { menuItems } from "@/data/menuItems"
import { Register } from "./MenuItem/Register/Register"
import { useTranslation } from "@/lib/i18n/useTranslation"
import { selectIsAuthenticated, selectCurrentUser } from "@/lib/redux/slices/auth/authSelectors"
import { logoutUser } from "@/lib/redux/slices/auth/authSlice"
import { FiLogOut, FiUser, FiSettings } from "react-icons/fi"
import { useAppDispatch, useAppSelector } from "@/lib/redux/store/hook"
import profile from "../../../../public/assets/images/Navbar/profile.jpg"

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const mobileDropdownRef = useRef<HTMLLIElement>(null)
    const { t, lang } = useTranslation()
    const dispatch = useAppDispatch()
    const isAuthenticated = useAppSelector(selectIsAuthenticated)
    const currentUser = useAppSelector(selectCurrentUser)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {setMounted(true)}, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
                setIsUserDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleLogout = () => {
        dispatch(logoutUser())
        setIsUserDropdownOpen(false)
    }

    const profileImage = currentUser?.profile_image_url || profile

    return (
        <>
            <div className="flex justify-between items-center md:px-0 bg-[var(--background)] text-[var(--foreground)]">
                {/* logo */}
                    <div className="hidden md:block">
                        <Image 
                            src={'/assets/images/Navbar/logo.svg'} 
                            alt="logo" 
                            width={166.3} 
                            height={30} 
                        />
                    </div>
                    <div className="md:hidden">
                        <Image 
                            src={'/assets/images/Navbar/logoMobile.png'} 
                            alt="logo" 
                            width={40} 
                            height={30} 
                        />
                    </div>

                {/* menuitem */}
                    <nav className="hidden md:flex justify-between items-center">
                        <MenuItem />
                    </nav>

                {/* User Profile Dropdown - Desktop */}
                {isAuthenticated && currentUser && (
                    <div className="hidden md:flex items-center mr-4 relative" ref={dropdownRef}>
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                        >
                            <Image
                                src={profileImage}
                                alt={t.account?.profile}
                                width={36}
                                height={36}
                                className="rounded-full object-cover border-2 border-gray-200"
                            />
                            <BiChevronDown
                                className={`transition-transform text-gray-600 ${isUserDropdownOpen ? "rotate-180" : ""}`}
                            />
                        </div>

                        {isUserDropdownOpen && (
                            <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg w-48 z-50">
                                <div className="p-3 border-b border-gray-100">
                                    <p className="font-semibold text-sm text-gray-800">
                                        {currentUser.first_name} {currentUser.last_name}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
                                </div>

                                <Link
                                    href="/profile"
                                    className={`flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors 
                                        ${lang == "ar" ? "gap-2" : ""}
                                    `}
                                    onClick={() => setIsUserDropdownOpen(false)}
                                >
                                    <FiUser className="mr-3 text-gray-500" size={16} />
                                    {t.account.profile}
                                </Link>

                                <Link
                                    href="/dashboard"
                                    className={`flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors
                                        ${lang == "ar" ? "gap-2" : ""}
                                    `}
                                    onClick={() => setIsUserDropdownOpen(false)}
                                >
                                    <FiSettings className="mr-3 text-gray-500" size={16} />
                                    {t.account.dashboard}
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className={`flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-gray-50 border-t border-gray-100 transition-colors
                                        ${lang == "ar" ? "gap-2" : ""}
                                    `}
                                >
                                    <FiLogOut className="mr-3" size={16} />
                                    {t.account.logout}
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Right Side Icons */}
                <div className="flex justify-between items-center md:gap-10 gap-8 md:pr-2">
                    <div className="hidden md:block bg-[var(--bg-header)]">
                        <Translate />
                    </div>
                    <div className="hidden md:block">
                        <DarkLightToggle />
                    </div>


                    {/*Mobile Menu Button */}
                    <button
                        className="relative flex justify-center items-center md:hidden focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <FaBars
                            className={`absolute cursor-pointer w-[20px] h-[20px] transition-all duration-500
                                ${mounted && !isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}
                            `}
                        />
                        <FaX
                            className={`absolute cursor-pointer w-[20px] h-[20px] transition-all duration-500
                                ${isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}
                            `}
                        />
                    </button>
                </div>
            </div>

{/*-------------------------------------------------------- Mobile Menu Button ------------------------------------------------------*/}
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[var(--background)] text-[var(--foreground)] shadow-lg rounded-lg mx-4 mb-4 p-4">
                    <div className="flex items-center mb-4 p-2 bg-gray-100 rounded-lg">
                        <FaSearch className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent w-full focus:outline-none"
                        />
                    </div>

                    <nav>
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span>{t.header[item.key]}</span>
                                        {item.hasDropdown && <BiChevronDown />}
                                    </Link>
                                </li>
                            ))}

                            {/* User Section - Mobile */}
                            {isAuthenticated && currentUser && (
                                <>
                                    <li className="border-t border-gray-200 pt-2 mt-2 relative" ref={mobileDropdownRef}>
                                        <div
                                            className="flex items-center p-2 cursor-pointer"
                                            onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                                        >
                                            <Image
                                                src={profileImage}
                                                alt="Profile"
                                                width={32}
                                                height={32}
                                                className="rounded-full object-cover mr-2"
                                            />
                                            <div>
                                                <p className="font-semibold text-sm">
                                                    {currentUser.first_name} {currentUser.last_name}
                                                </p>
                                                <p className="text-xs text-gray-500">{currentUser.email}</p>
                                            </div>
                                            <BiChevronDown
                                                className={`ml-auto transition-transform ${isUserDropdownOpen ? "rotate-180" : ""}`}
                                            />
                                        </div>

                                        {isUserDropdownOpen && (
                                            <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-full z-50">
                                                <Link
                                                    href="/dashboard"
                                                    className="flex items-center p-2 hover:bg-gray-100 rounded-lg"
                                                    onClick={() => {
                                                        setIsMobileMenuOpen(false)
                                                        setIsUserDropdownOpen(false)
                                                    }}
                                                >
                                                    <FiSettings className="mr-2" />
                                                    {t.account.dashboard}
                                                </Link>

                                                <Link
                                                    href="/profile"
                                                    className="flex items-center p-2 hover:bg-gray-100 rounded-lg"
                                                    onClick={() => {
                                                        setIsMobileMenuOpen(false)
                                                        setIsUserDropdownOpen(false)
                                                    }}
                                                >
                                                    <FiUser className="mr-2" />
                                                    {t.account.profile || "Profile"}
                                                </Link>

                                                <button
                                                    onClick={() => {
                                                        dispatch(logoutUser())
                                                        setIsMobileMenuOpen(false)
                                                        setIsUserDropdownOpen(false)
                                                    }}
                                                    className="flex items-center w-full p-2 text-red-600 hover:bg-gray-100 rounded-lg"
                                                >
                                                    <FiLogOut className="mr-2" />
                                                    {t.account.logout || "Logout"}
                                                </button>
                                            </div>
                                        )}
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <Translate mobile />
                            <DarkLightToggle />
                        </div>
                            <Register mobile />
                    </div>
                </div>
            )}
        </>
    )
}
