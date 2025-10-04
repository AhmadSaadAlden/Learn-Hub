'use client'
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { FaClock, FaGraduationCap} from "react-icons/fa"

interface FeaturedCoursesCardType {
    img: string | StaticImageData
    imgTitle: string
    title: string
    description: string
    time: string
    study: string
    price: string
    free: string
    viewMore: string
}

interface FeaturedCoursesCardProps {
    card: FeaturedCoursesCardType
}

export const SecondaryCard = ({card}: FeaturedCoursesCardProps) => {
    return (
        <div className="w-full sm:max-w-[385px] h-[474px] rounded-[20px] flex flex-col items-center gap-9 cursor-pointer
                    border border-[var(--FeaturedCourses-border-card)] shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 ease-in-out">
            {card.img && (
                <div className="relative w-full h-[250px]">
                    <Image 
                        src={card.img} 
                        alt={card.imgTitle}
                        fill 
                        className="rounded-t-[20px]" 
                    />
                    <div className="absolute top-5 left-5 bg-black rounded-md px-3 py-1">
                        <Link href={"#"}>
                            <span className="text-white jost font-medium text-base">{card.imgTitle}</span>
                        </Link>
                    </div>
                </div>
            )}
            <div className="px-4 pb-5 space-y-3 w-full">
                <div>
                    <p className="jost font-normal text-sm md:text-base text-[var(--FeaturedCourses-para)]">{card.description}</p>
                    <h4 className="font-semibold text-lg md:text-xl text-[var(--FeaturedCourses-title-card)] hover:text-[var(--primary-text-hover)]">
                        {card.title}
                    </h4>
                </div>
                <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="flex items-center justify-center gap-2 jost font-normal text-[var(--FeaturedCourses-para)]">
                        <FaClock className="text-[var(--FeaturedCourses-icon)]" />
                        {card.time}
                    </span>
                    <span className="flex items-center justify-center gap-2 jost font-normal text-[var(--FeaturedCourses-para)]">
                        <FaGraduationCap className="text-[var(--FeaturedCourses-icon)]" />
                        {card.study}
                    </span>
                </div>
                <hr className="border-gray-300"/>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <del className="flex items-center text-[var(--FeaturedCourses-del)]">{card.price}</del>
                        <span className="text-[var(--FeaturedCourses-free)]">{card.free}</span>
                    </div>
                    
                    <Link href={"#"}>
                        <span className="text-[var(--FeaturedCourses-viweMore)] jost font-medium text-[18px]">{card.viewMore}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
