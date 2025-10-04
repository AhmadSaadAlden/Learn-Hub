'use client'
import { btn } from "@/interfaces"

const SecondaryButtons = ({text, handler = () => {}, className}: btn) => {
    return (
        <>
            <button 
                onClick={handler}
                className={`${className || ''} 
                "w-[177px] h-12 bg-[var(--AddOns-btn-bg)] text-[var(--AddOns-btn)] rounded-3xl jost font-medium text-base md:text-lg px-6 py-2.5"`}
            >
                {text}
            </button>
        </>
    )
}

export default SecondaryButtons