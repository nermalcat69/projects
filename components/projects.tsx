import React from "react"

import Card from "@/components/globals/card"

const projectsData = [
  { releaseDate: "2023", name: "Test", description: "im nermalcat69", link: "https://google.com" },
  { releaseDate: "2022", name: "test 2", description: "im nermalcat69", link: "https://google.com" },
  { releaseDate: "2021", name: "LOLZ", description: "im nermalcat69", link: "https://google.com" },
    { releaseDate: "2021", name: "LOLZ", description: "im nermalcat69", link: "https://google.com" },
  { releaseDate: "2021", name: "LOLZ", description: "im nermalcat69", link: "https://google.com" },
  { releaseDate: "2021", name: "LOLZ", description: "im nermalcat69", link: "https://google.com" },
  { releaseDate: "2021", name: "LOLZ", description: "im nermalcat69", link: "https://google.com" },
  { releaseDate: "2021", name: "LOLZ", description: "im nermalcat69", link: "https://google.com" },
  { releaseDate: "2021", name: "LOLZ", description: "im nermalcat69", link: "https://google.com" },
  { releaseDate: "2021", name: "LOLZ", description: "im nermalcat69", link: "https://google.com" },

]

export default function Projects() {
  return (
    <div className="py-2 pb-10">
      <div className="m-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-around ">
          {projectsData.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
