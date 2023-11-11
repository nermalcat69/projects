import "@/styles/globals.css"
import { Metadata } from "next"
import { GeistSans } from "geist/font"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/globals/footer"
import { Header } from "@/components/globals/header"
import Lines from "@/components/svgs/lines"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-scroll	"
        )}
      >
        <div className=" flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">{children}</div>
        </div>
        <Lines />
        <Footer />
      </body>
    </html>
  )
}
