"use client"
import { AuthConfig, AuthData } from "@/interfaces/auth"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n/useTranslation"
import profile from "@/./../public/assets/images/Navbar/profile.jpg"
import { useState } from "react"

interface AuthFormProps {
    config: AuthConfig
    data: AuthData
    onChange: (name: string, value: string) => void
    onSubmit: (e: React.FormEvent) => void
    isLoading?: boolean
    variant: "login" | "signup"
}

export default function AuthForm({
    config,
    data,
    onChange,
    onSubmit,
    isLoading = false,
    variant
}: AuthFormProps) {
    const { t } = useTranslation()
    const isLogin = variant === "login"

    return (
        <div className="w-full max-w-[700px] mx-4 bg-[var(--bg-auth)] rounded-lg shadow-md p-6 jost">
            <h2 className="text-2xl font-bold mb-6 text-center text-[var(--text-title)]">
                {isLogin ? t.login.title : t.signup.title}
            </h2>

            <form onSubmit={onSubmit} className={`flex flex-col gap-4 ${
                variant === "signup" 
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                    : "flex flex-col"
            }`}>
                {config.fields.map((field, index) => {
                    let colSpan = "col-span-1"
                    if (["email"].includes(field.name)) colSpan = "col-span-1 md:col-span-2 lg:col-span-3"
                    if (["password", "password_confirmation"].includes(field.name)) colSpan = "col-span-1 md:col-span-1"
                    if (["profile_image"].includes(field.name)) colSpan = "col-span-1 md:col-span-2 lg:col-span-3 flex justify-start"

                    const displayLabel = field.label || 
                        (isLogin 
                            ? (t.login as any)[`label${field.name.charAt(0).toUpperCase() + field.name.slice(1)}`]
                            : (t.signup as any)[`label${field.name.charAt(0).toUpperCase() + field.name.slice(1)}`]
                        )

                    return (
                        <div key={index} className={colSpan}>
                            <label htmlFor={field.name} className="block text-sm font-medium text-[var(--label-input-auth)] mb-2">
                                {field.type !== "file" 
                                    ? 
                                        displayLabel
                                    : 
                                        <img 
                                            src={profile.src} 
                                            alt="profile" 
                                            className="w-[80px] h-[80px] rounded-full border mx-auto md:mx-0"
                                        />
                                }
                            </label>
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={field.type === "file" ? undefined : (data[field.name as keyof AuthData] as string || "")}
                                onChange={(e) => onChange(field.name, e.target.value)}
                                className={`${field.type !== "file" ? "w-full" : "hidden"} px-4 py-2 border border-gray-300 rounded-md outline-0 
                                focus:outline-none focus:ring-2 focus:ring-orange-200 cursor-pointer`}
                                required={field.required !== false}
                            />
                        </div>
                    )
                })}

                {config.showRememberMe && (
                    <div className="flex items-center mb-4 col-span-1 md:col-span-2 lg:col-span-3">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                        <label htmlFor="remember" className="ml-2 text-sm text-[var(--label-input)]">
                            {isLogin && <div className="mr-2">{t.login.Remember}</div>}
                        </label>
                    </div>
                )}

                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full cursor-pointer bg-[var(--btn-auth)] text-white py-2 px-4 rounded-md
                                hover:bg-orange-500 disabled:opacity-50 transition-colors"
                    >
                        {isLoading ? t.common?.loading || "Loading..." : isLogin ? t.login.btn : t.signup.btn}
                    </button>
                </div>

                {config.footer && (
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 col-span-1 md:col-span-2 lg:col-span-3">
                        <p className="text-sm text-center text-[var(--label-forget-auth)] mt-1">
                            {isLogin ? t.login.footerText : t.signup.footerText}
                            <Link href={config.footer.urlText} className="text-[var(--link-auth)] hover:underline">
                                {isLogin ? t.login.linkText : t.signup.linkText}
                            </Link>
                        </p>
                        <Link href={config.footer.linkReg} className="flex items-center justify-center text-[var(--link-auth)] hover:underline">
                            {isLogin ? t.login.linkRegister : t.signup.linkRegister}
                        </Link>
                    </div>
                )}
            </form>
        </div>
    )
}