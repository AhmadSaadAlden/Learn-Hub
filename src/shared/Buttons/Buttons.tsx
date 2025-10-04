'use client'
import { btn } from "@/interfaces"

const Buttons = ({text, handler = () => {}, className}: btn) => {
  return (
    <>
        <button 
          onClick={handler}
          className={`
            ${className || ''} 
            w-[76px] h-[32px] cursor-pointer hover:scale-105 duration-300 rounded-[8px] 
            jost text-[16px] font-normal bg-[var(--bg-btn)] text-[var(--text-btn)]
            hover:bg-blue-800
          `}
        >
          {text}
        </button>
    </>
  )
}

export default Buttons