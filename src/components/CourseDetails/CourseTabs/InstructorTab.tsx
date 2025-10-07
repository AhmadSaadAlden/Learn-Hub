'use client'

import Image from "next/image"
import Instructor from "./../../../../public/assets/images/courses/Instructor.png"
import { FaCopy, FaFacebook, FaGraduationCap, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa"
import Link from "next/link"
import { FaXTwitter } from "react-icons/fa6"
const InstructorTab = () => {
    return (
        <div>
            <div className="flex justify-between gap-6">
                <Image 
                    src={Instructor} 
                    alt="Instructor" 
                    width={250}
                    height={180}
                />
                <div>
                    <h4 className="font-semibold text-[20px] text-black">ThimPress</h4>
                    <p className="jost font-normal md:text-lg text-base text-[var(--para)]">LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.</p>
                    <div className="flex items-center gap-2">
                        <FaGraduationCap className="text-[var(--FeaturedCourses-icon)]" />
                        <span className="jost font-normal md:text-lg text-base text-[var(--para)]">156 Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCopy className="text-[var(--FeaturedCourses-icon)]" />
                        <span className="jost font-normal text-lg md:text-base text-[var(--para)]">20 Lessons</span>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <p className="jost font-normal md:text-lg text-base text-[var(--para)]">
                    LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.
                </p>
                <div className="mt-5 flex gap-6">
                    <p className="jost font-normal md:text-lg text-base text-[var(--para)]">Follow:</p>
                    <div className="flex gap-3 pt-1">   
                        <Link href={"#"} className="text-[var(--icon-color)] hover:text-[var(--primary-text-hover)]"><FaFacebook /></Link>
                        <Link href={"#"} className="text-[var(--icon-color)] hover:text-[var(--primary-text-hover)]"><FaPinterest /></Link>
                        <Link href={"#"} className="text-[var(--icon-color)] hover:text-[var(--primary-text-hover)]"><FaXTwitter /></Link>
                        <Link href={"#"} className="text-[var(--icon-color)] hover:text-[var(--primary-text-hover)]"><FaInstagram /></Link>
                        <Link href={"#"} className="text-[var(--icon-color)] hover:text-[var(--primary-text-hover)]"><FaYoutube /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorTab