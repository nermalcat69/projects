import React from "react"

import Card from "@/components/globals/card"

const projectsData = [
  {
    releaseDate: "2023",
    TopicOne: "Typescript",
    TopicTwo: "Nextjs",
    TopicThree: "Tailwind",
    name: "Test",
    thumbnail:
      "https://raw.githubusercontent.com/nermalcat69/Site/main/thumbnail.png",
    description: "im nermalcat69",
    link: "https://google.com",
  },
  {
    releaseDate: "2023",
    TopicOne: "Typescript",
    TopicTwo: "Nextjs",
    TopicThree: "Tailwind",
    name: "Test",
    thumbnail:
      "https://raw.githubusercontent.com/nermalcat69/Site/main/thumbnail.png",
    description: "im nermalcat69",
    link: "https://google.com",
  },
  {
    releaseDate: "2022",
    TopicOne: "Typescript",
    TopicTwo: "Nextjs",
    TopicThree: "Tailwind",
    name: "test 2",
    thumbnail:
      "https://raw.githubusercontent.com/nermalcat69/Site/main/thumbnail.png",
    description: "im nermalcat69",
    link: "https://google.com",
  },
  {
    releaseDate: "2021",
    TopicOne: "Typescript",
    TopicTwo: "Nextjs",
    TopicThree: "Tailwind",
    name: "LOLZ",
    thumbnail:
      "https://raw.githubusercontent.com/nermalcat69/Site/main/thumbnail.png",
    description: "im nermalcat69",
    link: "https://google.com",
  },
  {
    releaseDate: "2021",
    TopicOne: "Typescript",
    TopicTwo: "Nextjs",
    TopicThree: "Tailwind",
    name: "LOLZ",
    thumbnail:
      "https://raw.githubusercontent.com/nermalcat69/Site/main/thumbnail.png",
    description: "im nermalcat69",
    link: "https://google.com",
  },
  {
    releaseDate: "2021",
    TopicOne: "Typescript",
    TopicTwo: "Nextjs",
    TopicThree: "Tailwind",
    name: "LOLZ",
    thumbnail:
      "https://raw.githubusercontent.com/nermalcat69/Site/main/thumbnail.png",
    description: "im nermalcat69",
    link: "https://google.com",
  },
  {
    releaseDate: "2021",
    TopicOne: "Typescript",
    TopicTwo: "Nextjs",
    TopicThree: "Tailwind",
    name: "LOLZ",
    thumbnail:
      "https://raw.githubusercontent.com/nermalcat69/Site/main/thumbnail.png",
    description: "im nermalcat69",
    link: "https://google.com",
  },
  {
    releaseDate: "2021",
    TopicOne: "Typescript",
    TopicTwo: "Nextjs",
    TopicThree: "Tailwind",
    name: "LOLZ",
    thumbnail:
      "https://raw.githubusercontent.com/nermalcat69/Site/main/cover.png",
    description: "im nermalcat69",
    link: "https://google.com",
  },
  {
    releaseDate: "2021",
    TopicOne: "Typescript",
    TopicTwo: "Nextjs",
    TopicThree: "Tailwind",
    name: "LOLZ",
    thumbnail:
      "https://raw.githubusercontent.com/nermalcat69/Site/main/cover.png",
    description: "im nermalcat69",
    link: "https://google.com",
  },
  {
    releaseDate: "2021",
    TopicOne: "Typescript",
    TopicTwo: "Nextjs",
    TopicThree: "Tailwind",
    name: "LOLZ",
    thumbnail:
      "https://raw.githubusercontent.com/nermalcat69/Site/main/cover.png",
    description: "im nermalcat69",
    link: "https://google.com",
  },
  {
    releaseDate: "2021",
    TopicOne: "Typescript",
    TopicTwo: "Nextjs",
    TopicThree: "Tailwind",
    name: "LOLZ",
    thumbnail:
      "https://raw.githubusercontent.com/nermalcat69/Site/main/cover.png",
    description: "im nermalcat69",
    link: "https://google.com",
  },
]

export default function Projects() {
  return (
    <div className="py-2 pb-10">
      <div className="m-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 content-around ">
          {projectsData.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
