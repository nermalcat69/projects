import Projects from "@/components/projects"
import Link from "next/link"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="pb-4">
        <></>
        <p className="max-w-[900px] text-md md:text-lg text-gray-700">
          Hello! I'm <strong>Arjun Aditya</strong>, also known by my internet alias{" "}
          <strong>nermalcat69</strong>. 17 years old and juggling
          school, I'm a full-stack developer. I love crafting sleek
          and user-friendly interfaces. I'm deeply enthusiastic about web
          development and currently exploring macOS/iOS
          development. Follow me on <Link className="text-gray-600 hover:text-gray-700 font-semibold" href="https://twitter.com/nermalcat69">Twitter</Link> *cat pleading*{" "}
        </p>
      </div>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-lg font-bold leading-tight tracking-normal md:text-2xl text-gray-800">
          Projects
        </h2>
        <p className="max-w-[700px] text-md md:text-lg text-gray-700">
          Explore <Link className="text-gray-600 hover:text-gray-700 font-semibold" href="https://github.com/nermalcat69">my github</Link> projects &#8211; click on the cards to get a
          sneak peek at my creations! 😃
        </p>
      </div>
      <Projects />
    </section>
  )
}
