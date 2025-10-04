'use client'
import { useTranslation } from "@/lib/i18n/useTranslation"
import Buttons from "@/shared/Buttons/Buttons"
import Link from "next/link"

export const Register = ({ mobile = false }) => {
  const {t} = useTranslation()
    return (
      <div className={mobile ? "block" : "hidden md:block"}>
        <Link href={"/login"}>
          <Buttons 
            text={t.btn.login}
            className={`${mobile ? 
                "block w-full text-center py-0 px-4 rounded-lg" : 
                ''}`}
          />
        </Link>
      </div>
    )
}