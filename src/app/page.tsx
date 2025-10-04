'use client'
import { AddOns } from "@/components/AddOns/AddOns";
import { Banner } from "@/components/Banner/Banner";
import { FeaturedCourses } from "@/components/FeaturedCourses/FeaturedCourses";
import { Hero } from "@/components/Hero/Hero";
import { OurStatistics } from "@/components/OurStatistics/OurStatistics";
import { Skills } from "@/components/Skills/Skills";
import { TopCategories } from "@/components/TopCategories/TopCategories";

export default function Home() {
    
    return (
        <div className="bg-[var(--TopCategories-bg)]">
            <Hero />
            <TopCategories />
            <FeaturedCourses />
            <AddOns />
            <OurStatistics />
            <Skills />
            <Banner />
        </div>
    )
}