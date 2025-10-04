export interface AuthData {
    first_name?: string
    last_name?: string
    email: string
    password: string
    user_name?: string
    password_confirmation?: string
    profile_image?: Blob | null
}

export interface AuthField {
    type: string
    placeholder?: string
    name: string
    label?: string
    required?: boolean
}

export interface AuthConfig {
    title: string
    fields: AuthField[]
    submitText: string
    showRememberMe?: boolean
    footer?: {
        text: string
        linkText: string
        urlText: string
        linkRegister: string
        linkReg: string
    }
}
