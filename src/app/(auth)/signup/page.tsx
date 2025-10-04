"use client"
import AuthForm from "@/components/AuthForm/AuthForm"
import { AuthData } from "@/interfaces/auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { loadAuthStateFromLocalStorage, registerUser } from "@/lib/redux/slices/auth/authSlice" // استيراد من authSlice
import { useAppDispatch, useAppSelector } from "@/lib/redux/store/hook"

const signupConfig = {
    title: "Register",
    fields: [
        { type: "text", placeholder: "First Name*", name: "first_name", required: true },
        { type: "text",  placeholder: "Last Name*", name: "last_name", required: true },
        { type: "text",  placeholder: "User Name*", name: "user_name", required: true },
        { type: "email",  placeholder: "Email*", name: "email", required: true },
        { type: "password",  placeholder: "Password*", name: "password", required: true },
        { type: "password",  placeholder: "Confirm Password*", name: "password_confirmation", required: true },
        { type: "file", name: "profile_image", required: false } // جعلناها غير مطلوبة
    ],
    submitText: "Register",
    footer: {
        text: "Lost your password?",
        linkText: " click here",
        urlText: "#",
        linkRegister: "login account",
        linkReg: "/login"
    }
}

export default function SignupPage() {
    const dispatch = useAppDispatch()
    const { status, error } = useAppSelector(state => state.auth)
    const router = useRouter()
    const [formData, setFormData] = useState<AuthData>({ 
        first_name: "",
        last_name: "",
        user_name: "", 
        email: "", 
        password: "", 
        password_confirmation: "", 
        profile_image: null
    })

     // تحميل الحالة من localStorage عند تحميل المكون
    useEffect(() => {
        dispatch(loadAuthStateFromLocalStorage());
    }, [dispatch]);

    const handleChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        // التحقق من تطابق كلمات المرور
        if (formData.password !== formData.password_confirmation) {
            alert("كلمات المرور غير متطابقة")
            return
        }

        dispatch(registerUser(formData))
    }

    useEffect(() => {
        if (status === "success") {
            router.push("/")
        }
    }, [status, router])

    return (
        <div className="flex items-center justify-center min-h-screen">
            <AuthForm
                config={signupConfig}
                data={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                isLoading={status === "loading"}
                variant="signup"
            />
            {status === "failed" && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
        </div>
    )
}