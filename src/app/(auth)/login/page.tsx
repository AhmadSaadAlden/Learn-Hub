"use client"
import AuthForm from "@/components/AuthForm/AuthForm"
import { AuthData } from "@/interfaces/auth"
import { selectAuthError, selectAuthStatus, selectCurrentUser } from "@/lib/redux/slices/auth/authSelectors"
import { loadAuthStateFromLocalStorage, loginUser } from "@/lib/redux/slices/auth/authSlice"
import { AppDispatch } from "@/lib/redux/store/store"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const loginConfig = {
    title: "Login",
    fields: [
        { type: "text", placeholder: "Email or username*", name: "email", required: true },
        { type: "password", placeholder: "Password*", name: "password", required: true }
    ],
    submitText: "Login",
    showRememberMe: true,
    footer: {
        text: "Lost your password?",
        linkText: " click here",
        urlText: "#",
        linkRegister: "create account",
        linkReg: "/signup"
    }
}

export default function LoginPage() {
    const dispatch = useDispatch<AppDispatch>()
    const currentUser = useSelector(selectCurrentUser)
    const error = useSelector(selectAuthError)
    const status = useSelector(selectAuthStatus)
    const router = useRouter()
    const [formData, setFormData] = useState<AuthData>({ 
        email: "", 
        password: "" 
    })

// تحميل الحالة من localStorage عند تحميل المكون
    useEffect(() => {
        dispatch(loadAuthStateFromLocalStorage());
    }, [dispatch]);

    const handleChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(loginUser(formData))
    }

    useEffect(() => {
        if (currentUser && status === "success") {
            router.push("/")
        }
    }, [status, currentUser, router])

    return (
        <div className="flex items-center justify-center min-h-screen">
            <AuthForm
                config={loginConfig}
                data={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                //isLoading={isLoading}
                variant= "login"
            />
            {error && <p className="text-red-500 mt-2"> {error}</p>}
        </div>
    );
}