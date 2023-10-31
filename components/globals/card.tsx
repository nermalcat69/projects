interface CardProps {
  releaseDate: string
  name: string
  description: string
  link: string
}

const Card: React.FC<CardProps> = ({ releaseDate, name, description, link }) => (
  <div className="card py-3 px-3 md:py-8 md:px-5">
    <a href={link}>
      <h2 className="text-md md:text-lg font-semibold  text-gray-800">{name}</h2>
      <p className="text-sm md:text-md text-gray-700 mb-4 mt-1">{description}</p>
      <span className="text-gray-700 text-xs border border-gray-200 rounded-full py-1 px-2">{releaseDate}</span>
    </a>
  </div>
)

export default Card
