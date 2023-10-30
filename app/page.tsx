import  Projects  from '@/components/projects'


export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
          Projects
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Nermalcat69's github projects you can click on the card to preview the project :D
        </p>
      </div>
      <Projects />                
    </section>
  )
}
