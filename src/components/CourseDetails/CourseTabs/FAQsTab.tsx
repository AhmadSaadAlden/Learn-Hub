'use client'

import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const FAQsTab = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null)
    const FaqsData = [
        {
            title: "What Does Royalty Free Mean?",
            content: [
                {
                    type: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui,adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
                }
            ]
        },
        {
            title: "How Can I Download My Files?",
            content: [
                {
                    type: "After completing your purchase, you can download your files directly from your account page. You'll also receive a download link via email."
                }
            ]
        },
        {
            title: "What Payment Methods Do You Accept?",
            content: [
                {
                    type: "We accept all major credit cards, PayPal, and various other payment methods depending on your region."
                }
            ]
        },
        {
            title: "Can I Use These Files For Commercial Projects?",
            content: [
                {
                    type: "Yes, all our files come with a commercial license that allows you to use them in personal and commercial projects."
                }
            ]
        },
    ]
    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index)
    }
    return (
        <div className="space-y-5">
            {FaqsData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg cursor-pointer overflow-hidden"
                    >
                        <div
                            onClick={() => toggleAccordion(index)}
                            className="flex justify-between items-center h-16 py-5 px-8 "
                        >
                            <h5 className="font-semibold text-xs md:text-base text-black hover:text-orange-500">{item.title}</h5>
                            {
                                openAccordion === index 
                            ? 
                                <FaChevronUp className="text-gray-500 w-3 h-3" /> 
                            : 
                                <FaChevronDown className="text-gray-500 w-3 h-3" />
                            }
                        </div>
                        

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out
                                ${openAccordion === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                            `}
                        >
                            <div className="border-t border-gray-200">
                                {item.content.map((itemContent, itemIndex) => (
                                    <div 
                                        key={itemIndex}
                                        className="py-5 px-8 bg-white "
                                    >
                                        <p className="jost font-normal text-xs md:text-base text-gray-600">{itemContent.type}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default FAQsTab