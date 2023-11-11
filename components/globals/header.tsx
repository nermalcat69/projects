import Link from "next/link"
import { buttonVariants } from "@/ui/button"
import { FaGithub } from "react-icons/fa6"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/globals/main-nav"

export function Header() {
  return (
    <header className="bg-background top-0 w-full border-b py-3">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center ">
            <Link
              href={siteConfig.links.contribute}
              target="_blank"
              rel="noreferrer"
            >
              <div className={buttonVariants()}>
                <div className="bg-gray-950 hover:bg-gray-800 text-white inline-flex items-center py-3 px-6 space-x-3 rounded-md  ">
                  <FaGithub className="h-6 w-6" />
                  <text className="font-semibold">Contribute</text>
                </div>
              </div>
            </Link>
          </nav>
        n</div>
      </div>
    </header>
  )
}
