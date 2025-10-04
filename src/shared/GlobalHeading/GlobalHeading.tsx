'use client'
import { GlobalHeadingType } from "@/interfaces"
import Link from "next/link"

const GlobalHeading = ({title, description, handler = () => {}, btntext, className}: GlobalHeadingType) => {
    return (
        <div className="md:w-full max-w[320px] md:h-[77px] md:flex justify-between items-center space-y-5 text-center md:text-start">
            <div className="space-y-3">
                <h2 className="font-semibold text-[32px] text-[var(--TopCategories-title)]">{title}</h2>
                <p className="jost font-normal text-[18px] text-[var(--TopCategories-para)]">{description}</p>
            </div>
            <div>
                <button onClick={handler} className={className}>
                    <Link href={"/courses"}>
                        {btntext}
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default GlobalHeading
