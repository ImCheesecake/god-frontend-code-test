import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dialog from "../../src/components/Dialog";
import type { Car } from "../../types/car";
import { getCarPaths, getCarProps } from "../../lib/staticGeneration";

enum PageType {
  Learn = "learn",
  Shop = "shop",
}

interface CarPageProps {
  car: Car;
  type: PageType;
}

const CarDetails: React.FC<{ car: Car }> = ({ car }) => (
  <>
    <p className="text-secondary font-medium">
      <span className="font-light">Body Type: </span>
      {car.bodyType.toLocaleUpperCase()}
    </p>
    <p className="text-secondary font-medium">
      <span className="font-light">Model Type: </span>
      {car.modelType.toLocaleUpperCase()}
    </p>
  </>
);

const CarPage: NextPage<CarPageProps> = ({ car, type }) => {
  const title = type === PageType.Learn ? `Learn about` : "Shop";

  return (
    <section aria-label="Car model" className="container-max stack-24 my-s">
      <nav>
        <Link href="/" className="button-text">
          Home
        </Link>
      </nav>
      <main>
        <h1 className="heading-1">
          {title} {car.modelName}
        </h1>
        <CarDetails car={car} />
        <Image
          src={car.imageUrl}
          alt={car.modelName}
          width={500}
          height={300}
          objectFit="cover"
          priority
        />
      </main>

      {type === PageType.Shop && (
        <Dialog>
          <button className="button-filled">Purchase</button>
        </Dialog>
      )}
    </section>
  );
};

export const getStaticPaths = getCarPaths;
export const getStaticProps = getCarProps;

export default CarPage;
