interface CardProps {
  releaseDate: string
  name: string
  description: string
  thumbnail: string
  link: string
  TopicOne: string
  TopicTwo: string
  TopicThree: string
}

const Card: React.FC<CardProps> = ({
  releaseDate,
  thumbnail,
  name,
  description,
  link,
  TopicOne,
  TopicTwo,
  TopicThree,
}) => (
  <a href={link}>
    <div className="card ">
      <img className="thumbnail" alt={name} src={thumbnail} />
      <div className="py-3 px-4 md:py-7">
        <div className="flex justify-center lg:justify-start">
        <span className="flex gap-1">
          <span className="text-gray-500 sm:text-gray-700 text-xs border border-gray-200 rounded-full py-1 px-2">
            {TopicOne}
          </span>
          <span className="text-gray-500 sm:text-gray-700 text-xs border border-gray-200 rounded-full py-1 px-2">
            {TopicTwo}
          </span>
          <span className="text-gray-500 sm:text-gray-700 text-xs border border-gray-200 rounded-full py-1 px-2">
            {TopicThree}
          </span>
        </span>
        </div>
        <h2 className="text-md md:text-lg font-semibold text-gray-800 pt-3">
          {name}
        </h2>
        <p className="text-sm md:text-md text-gray-700 mb-4 mt-1">
          {description}
        </p>
        <span className="text-gray-700 text-xs border border-gray-200 rounded-full py-1 px-2">
          {releaseDate}
        </span>
      </div>
    </div>
  </a>
)

export default Card
