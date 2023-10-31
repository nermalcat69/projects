interface CardProps {
  releaseDate: string
  name: string
  link: string
}

const Card: React.FC<CardProps> = ({ releaseDate, name, link }) => (
  <div className="card py-8 px-5">
    <a href={link} className="card-link">
      <h2 className="text-md md:text-lg font-bold text-gray-800">{name}</h2>
      <span className="text-gray-600">{releaseDate}</span>
    </a>
  </div>
)

export default Card
