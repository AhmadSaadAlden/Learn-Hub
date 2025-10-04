"use client";
import { useDispatch, useSelector } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";
import { RootState } from "@/lib/redux/store/store";
import { toggleTheme } from "@/lib/redux/slices/themeSlice";

export const DarkLightToggle = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);
  
  const switchMode = () => {
    dispatch(toggleTheme());
  };
  
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={switchMode}
      className="cursor-pointer relative flex justify-center items-center"
      aria-label="Toggle dark mode"
    >
      <FaSun className={`w-[20px] h-[20px] absolute transition-all duration-300 
        ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} 
      />
      <FaMoon className={`w-[20px] h-[20px] absolute transition-all duration-300 
        ${theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} 
      />
    </button>
  );
};
