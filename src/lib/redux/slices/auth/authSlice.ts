import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthUser {
    id?: number;
    first_name?: string;
    last_name?: string;
    user_name?: string;
    email?: string;
    password?: string;
    profile_image_url?: string | null;
    created_at?: string;
}

type Status = "idle" | "loading" | "success" | "failed";

interface AuthState {
    users: AuthUser[];
    currentUser: AuthUser | null;
    isAuthenticated: boolean;
    token: string | null;
    status: Status;
    error: string | null;
}

// دالة لتحميل الحالة من localStorage
const loadStateFromLocalStorage = (): AuthState | null => {
    if (typeof window === 'undefined') return null;
    
    try {
        const serializedState = localStorage.getItem('authState');
        if (serializedState === null) return null;
        return JSON.parse(serializedState);
    } catch (error) {
        console.error('Error loading state from localStorage:', error);
        return null;
    }
};

// دالة لحفظ الحالة في localStorage
const saveStateToLocalStorage = (state: AuthState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('authState', serializedState);
    } catch (error) {
        console.error('Error saving state to localStorage:', error);
    }
};

// دالة لمسح الحالة من localStorage
const clearStateFromLocalStorage = () => {
    try {
        localStorage.removeItem('authState');
    } catch (error) {
        console.error('Error clearing state from localStorage:', error);
    }
};

// تحميل الحالة المحفوظة أو استخدام الحالة الافتراضية
const savedState = loadStateFromLocalStorage();
const initialState: AuthState = savedState ? savedState : {
    users: [],
    currentUser: null,
    isAuthenticated: false,
    token: null,
    status: "idle",
    error: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // تسجيل مستخدم جديد
        registerUser: (state, action: PayloadAction<AuthUser>) => {
            const existingUser = state.users.find(user => 
                user.email === action.payload.email || 
                user.user_name === action.payload.user_name
            );
            
            if (existingUser) {
                state.status = "failed";
                state.error = "المستخدم موجود بالفعل";
                return;
            }

            const newUser: AuthUser = {
                ...action.payload,
                id: state.users.length + 1,
                created_at: new Date().toISOString(),
                profile_image_url: action.payload.profile_image_url
            };

            state.users.push(newUser);
            state.currentUser = newUser;
            state.isAuthenticated = true;
            state.status = "success";
            state.error = null;

            // حفظ الحالة في localStorage
            saveStateToLocalStorage(state);
        },

        // تسجيل الدخول
        loginUser: (state, action: PayloadAction<{email: string; password: string}>) => {
            const user = state.users.find(u => 
                (u.email === action.payload.email || u.user_name === action.payload.email) && 
                u.password === action.payload.password
            );

            if (!user) {
                state.status = "failed";
                state.error = "البريد الإلكتروني أو كلمة المرور غير صحيحة";
                return;
            }

            state.currentUser = user;
            state.isAuthenticated = true;
            state.status = "success";
            state.error = null;

            // حفظ الحالة في localStorage
            saveStateToLocalStorage(state);
        },

        // تسجيل الخروج
        logoutUser: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
            state.status = "idle";
            state.error = null;

            // حفظ الحالة في localStorage
            saveStateToLocalStorage(state);
        },

        // إضافة مستخدم يدوياً
        addUser: (state, action: PayloadAction<AuthUser>) => {
            const idx = state.users.findIndex(u => u.email === action.payload.email);
            if (idx >= 0) {
                state.users[idx] = {...state.users[idx], ...action.payload};
            } else {
                state.users.push(action.payload);
            }

            // حفظ الحالة في localStorage
            saveStateToLocalStorage(state);
        },

        // إعادة تعيين حالة المصادقة
        resetAuthState: (state) => {
            state.users = [];
            state.currentUser = null;
            state.isAuthenticated = false;
            state.token = null;
            state.status = "idle";
            state.error = null;

            // مسح localStorage
            clearStateFromLocalStorage();
        },

        // تحميل الحالة من localStorage يدوياً
        loadAuthStateFromLocalStorage: (state) => {
            const savedState = loadStateFromLocalStorage();
            if (savedState) {
                return { ...state, ...savedState };
            }
            return state;
        },

        // حفظ الحالة إلى localStorage يدوياً
        saveAuthStateToLocalStorage: (state) => {
            saveStateToLocalStorage(state);
        }
    }
});

export const { 
    registerUser, 
    loginUser, 
    logoutUser, 
    addUser, 
    resetAuthState, 
    loadAuthStateFromLocalStorage,
    saveAuthStateToLocalStorage
} = authSlice.actions;

export default authSlice.reducer;