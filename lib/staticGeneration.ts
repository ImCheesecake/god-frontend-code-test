import { GetStaticPaths, GetStaticProps } from "next";
import { fetchCars, getCarById } from "./carData";
import { Car } from "../types/car";

export const getCarPaths: GetStaticPaths = () => {
  const cars = fetchCars();
  const bothTypes = cars.flatMap((car) => [
    { params: { type: "learn", id: car.id } },
    { params: { type: "shop", id: car.id } },
  ]);
  return { paths: bothTypes, fallback: false };
};

export const getCarProps: GetStaticProps = ({ params }) => {
  const car = getCarById(params?.id as string);
  return {
    props: {
      car,
      type: params?.type as "learn" | "shop",
    },
  };
};

export const getIndexProps: GetStaticProps<{ cars: Car[] }> = () => {
  const cars = fetchCars();
  return { props: { cars } };
};
