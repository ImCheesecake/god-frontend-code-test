import Image from "next/image";
import Link from "next/link";
import type { Car } from "../../types/car";

const CAR_IMAGE_DIMENSIONS = {
  width: 350,
  height: 300,
} as const;

const CAR_CARD_CLASSNAMES = {
  article: "flex-col flex-shrink-0 flex-grow-0 gap-y-16 h-full snap-start",
  bodyType: "text-secondary font-medium",
  headerContainer: "flex flex-col lg:flex-row gap-8 lg:items-center",
  modelName: "heading-2 font-20",
  modelType: "font-20 text-secondary font-light",
  image: "img h-full w-full object-cover",
  linkContainer: "flex gap-16 justify-center",
  link: "button-text text-accent-blue",
  srOnly: "sr-only",
} as const;

interface WithCarProps {
  car: Car;
}

const CarImage: React.FC<WithCarProps> = ({ car }) => {
  return (
    <figure>
      <Image
        alt={`${car.bodyType} ${car.modelName} ${car.modelType}`}
        className={CAR_CARD_CLASSNAMES.image}
        src={car.imageUrl}
        {...CAR_IMAGE_DIMENSIONS}
        priority
      />
    </figure>
  );
};

const CarHeader: React.FC<WithCarProps> = ({ car }) => {
  return (
    <header className={CAR_CARD_CLASSNAMES.headerContainer}>
      <h2 className={CAR_CARD_CLASSNAMES.modelName} id={`car-${car.id}-title`}>
        {car.modelName}
      </h2>
      <span
        className={CAR_CARD_CLASSNAMES.modelType}
        aria-describedby={`car-${car.id}-title`}
      >
        {car.modelType}
      </span>
    </header>
  );
};

const CarLinks: React.FC<WithCarProps> = ({ car }) => {
  return (
    <nav
      className={CAR_CARD_CLASSNAMES.linkContainer}
      aria-label={`${car.modelName} options`}
    >
      <Link href={`/learn/${car.id}`} passHref>
        <a
          className={CAR_CARD_CLASSNAMES.link}
          aria-label={`Learn more about ${car.modelName}`}
        >
          Learn
          <span className={CAR_CARD_CLASSNAMES.srOnly}>
            more about {car.modelName}
          </span>
        </a>
      </Link>
      <Link href={`/shop/${car.id}`} passHref>
        <a
          className={CAR_CARD_CLASSNAMES.link}
          aria-label={`Shop ${car.modelName}`}
        >
          Shop
          <span className={CAR_CARD_CLASSNAMES.srOnly}>{car.modelName}</span>
        </a>
      </Link>
    </nav>
  );
};

const CarCard: React.FC<WithCarProps> = ({ car }) => {
  return (
    <article
      className={CAR_CARD_CLASSNAMES.article}
      aria-labelledby={`car-${car.id}-title`}
    >
      <p className={CAR_CARD_CLASSNAMES.bodyType} aria-label="Body type">
        {car.bodyType.toLocaleUpperCase()}
      </p>
      <CarHeader car={car} />
      <CarImage car={car} />
      <CarLinks car={car} />
    </article>
  );
};

export default CarCard;
