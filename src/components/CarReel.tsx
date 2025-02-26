import type { FC } from "react";
import { IconButton } from "@volvo-cars/react-icons";
import { useRef } from "react";
import type { Car } from "../../types/car";
import CarCard from "./CarCard";
import { useSnapNavigation } from "@volvo-cars/react-headless";
import PaginationDots from "./PaginationDots";

interface CarReelProps {
  cars: Car[];
}

const PaginationArrows: FC<{
  previousButtonProps: any;
  nextButtonProps: any;
}> = ({ previousButtonProps, nextButtonProps }) => (
  <div className="hidden md:flex gap-16 justify-end">
    <IconButton
      icon="chevron-back"
      variant="outlined"
      {...previousButtonProps}
    />
    <IconButton
      icon="chevron-forward"
      variant="outlined"
      {...nextButtonProps}
    />
  </div>
);

const ErrorMessage: FC<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);

const CarReel: FC<CarReelProps> = ({ cars }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { previousButtonProps, nextButtonProps } = useSnapNavigation({
    ref,
  });

  if (!Array.isArray(cars)) {
    return <ErrorMessage message="Invalid cars data" />;
  }

  if (cars.length === 0) {
    return <ErrorMessage message="No cars available" />;
  }

  return (
    <section aria-label="Car models" className="container-max stack-24 my-s">
      <div
        ref={ref}
        className="reel gap-x-16 scrollbar-none"
        role="region"
        aria-roledescription="carousel"
        aria-label="Car models"
        tabIndex={0}
      >
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <PaginationDots containerRef={ref} count={cars.length} />
      <PaginationArrows
        previousButtonProps={previousButtonProps}
        nextButtonProps={nextButtonProps}
      />
    </section>
  );
};

export default CarReel;
