import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"

import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <header className="bg-background fixed bottom-0 z-40 w-full mt-auto border-t">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <span className="text-gray-800">
          Powered by{" "}
          <span className="font-bold hover:text-gray-600 cursor-pointer">
            Vercel
          </span>
        </span>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center ">
            <div className="">
              <div className="inline-flex items-center space-x-3 rounded-md  ">
                <Link
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaXTwitter className="h-6 w-6 text-gray-800 hover:text-gray-600" />{" "}
                </Link>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaLinkedinIn className="h-6 w-6 text-gray-800 hover:text-gray-600" />{" "}
                </Link>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="h-6 w-6 text-gray-800 hover:text-gray-600" />{" "}
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
