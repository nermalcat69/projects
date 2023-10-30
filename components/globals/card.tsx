interface CardProps {
  releaseDate: string;
  name: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ releaseDate, name, link }) => (
  <div className="card py-8 px-5">
    <a href={link} className="card-link">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <span className="card-date">{releaseDate}</span>
    </a>
  </div>
);

export default Card;
