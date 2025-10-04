import { Exo, Jost } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import type { Metadata } from "next";
import { AppProviders } from "@/providers/AppProviders/AppProviders";

export const metadata: Metadata = {
  title: "Learn Hub",
  description: "Education Platform",
}

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
})

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang={"en"} dir={"ltr"}>
      <body
        className={`${exo.variable} ${jost.variable} antialiased`}
      >
        <AppProviders>
            <Header />
              <main className="min-h-screen pt-[var(--header-total)]">
                {children}
              </main>
            <Footer/>
        </AppProviders>
      </body>
    </html>
  );
}
