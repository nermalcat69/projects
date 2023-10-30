import React from "react";

const projectsData = [
  { releaseDate: "2023", name: "Test", link: "https://google.com" },
  { releaseDate: "2022", name: "test 2", link: "https://google.com" },
    { releaseDate: "2021", name: "LOLZ", link: "https://google.com" },

];

export default function Projects() {

  return (
    <div className="py-2 pb-10">
      <div className="m-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 content-around ">
          {projectsData.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}



interface Card {
  releaseDate: string;
  name: string;
  link: string;
}


export function Card({ releaseDate, name, link }) {
  return (
    <div className="card py-8 px-5">
      <a href={link} className="">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <span className="font-mono self-center">{releaseDate}</span>
      </a>
    </div>
  );
}
