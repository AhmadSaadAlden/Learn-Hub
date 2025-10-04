"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/lib/redux/store/store";
import { setTheme } from "@/lib/redux/slices/themeSlice";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = useSelector((state: RootState) => state.theme.value);
    const dispatch = useDispatch();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        //restore theme from localstorage on client only
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
        dispatch(setTheme(savedTheme));
        }
        setMounted(true);
    }, [dispatch]);

    useEffect(() => {
        // when moounted save and send theme to localstorage
        if (mounted) {
        localStorage.setItem('theme', theme);
        }
    }, [theme, mounted]);

    if (!mounted) {
        return <div style={{ visibility: "hidden" }}>{children}</div>;
    }

    return <div className={theme === "dark" ? "dark" : "light"}>{children}</div>;
};