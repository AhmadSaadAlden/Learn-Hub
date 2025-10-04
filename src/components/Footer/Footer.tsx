'use client'
import { useTranslation } from "@/lib/i18n/useTranslation"
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const Footer = () => {
    const {t} = useTranslation()
    return (
        <footer className="w-full min-h-[458px] bg-[var(--bg-footer)] footer">
            <div className="container px-4">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
                    
                    {/* col 1  */}
                    <div className="w-full lg:w-[413px] lg:h-[118px] flex flex-col justify-between gap-8">
                        <Image src={'/assets/images/Navbar/logo.svg'} alt="logo" width={166.3} height={30} />
                        <div>
                            <p className="w-full lg:w-[341px] lg:h-[69px] jost font-normal text-[18px] text-[var(--text-footer)]">
                            {t.footer.summary}
                            </p>
                        </div>
                    </div>
                    
                    {/* col 2 */}
                    <div className="w-full lg:w-[110px] lg:h-[118px] flex flex-col justify-between gap-8">
                        <div>
                            <h4 className="font-semibold text-[20px] text-[var(--second-text-footer)]">{t.footer.oneColTitle}</h4>
                        </div>
                        <div className="flex flex-col items-start justify-between gap-6">
                            <Link href={"#"} className="jost font-medium text-[18px] text-[var(--text-footer)] hover:text-[var(--primary-text-hover)]">{t.footer.OneColOnelink}</Link>
                            <Link href={"#"} className="jost font-medium text-[18px] text-[var(--text-footer)] hover:text-[var(--primary-text-hover)]">{t.footer.OneColTwolink}</Link>
                            <Link href={"#"} className="jost font-medium text-[18px] text-[var(--text-footer)] hover:text-[var(--primary-text-hover)]">{t.footer.OneColThreelink}</Link>
                        </div>
                    </div>
                    
                    {/* col 3 */}
                    <div className="w-full lg:w-[110px]  flex flex-col justify-between gap-8 pt-16 lg:pt-0">
                        <div>
                            <h4 className="font-semibold text-[20px] text-[var(--second-text-footer)]">{t.footer.twoColTitle}</h4>
                        </div>
                        <div className="flex flex-col items-start justify-between gap-6">
                            <Link href={"#"} className="jost font-medium text-[18px] text-[var(--text-footer)] hover:text-[var(--primary-text-hover)]">{t.footer.twoColOnelink}</Link>
                            <Link href={"#"} className="jost font-medium text-[18px] text-[var(--text-footer)] hover:text-[var(--primary-text-hover)]">{t.footer.twoColTwolink}</Link>
                            <Link href={"#"} className="jost font-medium text-[18px] text-[var(--text-footer)] hover:text-[var(--primary-text-hover)]">{t.footer.twoColThreelink}</Link>
                            <Link href={"#"} className="jost font-medium text-[18px] text-[var(--text-footer)] hover:text-[var(--primary-text-hover)]">{t.footer.twoColFourlink}</Link>
                            <Link href={"#"} className="jost font-medium text-[18px] text-[var(--text-footer)] hover:text-[var(--primary-text-hover)]">{t.footer.twoColFivelink}</Link>
                        </div>
                    </div>
                    
                    {/* col 4 */}
                    <div className="w-full lg:w-[340.2px] lg:h-[218px]  flex flex-col justify-between gap-8">
                        <div>
                            <h4 className="font-semibold text-[20px] text-[var(--second-text-footer)]">{t.footer.threeColTitle}</h4>
                        </div>
                        <div className="flex flex-col items-start justify-between gap-6">
                            <div>
                                <p className="jost font-normal text-[18px] text-[var(--text-footer)] hover:text-[var(--primary-text-hover)]">
                                    {t.footer.threeColOnePara}
                                </p>
                                <p className="jost font-normal text-[18px] text-[var(--text-footer)] hover:text-[var(--primary-text-hover)]">
                                    {t.footer.threeColTwoPara}
                                </p>
                                <p className="jost font-normal text-[18px] text-[var(--text-footer)] hover:text-[var(--primary-text-hover)]">
                                    {t.footer.threeColThreePara}
                                </p>
                            </div>
                            <div className="flex gap-3 items-start">   
                                <Link href={"#"} className="text-[var(--icon-color)] hover:text-[var(--primary-text-hover)]"><FaFacebook /></Link>
                                <Link href={"#"} className="text-[var(--icon-color)] hover:text-[var(--primary-text-hover)]"><FaPinterest /></Link>
                                <Link href={"#"} className="text-[var(--icon-color)] hover:text-[var(--primary-text-hover)]"><FaXTwitter /></Link>
                                <Link href={"#"} className="text-[var(--icon-color)] hover:text-[var(--primary-text-hover)]"><FaInstagram /></Link>
                                <Link href={"#"} className="text-[var(--icon-color)] hover:text-[var(--primary-text-hover)]"><FaYoutube /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center items-center mt-28 lg:mt-[50px]">
                    <p className="jost font-normal text-[18px] text-[var(--text-footer)] text-center">
                        {t.footer.secondFooter}
                    </p>
                </div>
            </div>
        </footer>
    )
}