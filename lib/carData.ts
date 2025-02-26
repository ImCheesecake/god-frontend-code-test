import type { Car } from "../types/car";
import carsData from "../public/api/cars.json" assert { type: "json" };

const cars: Car[] = carsData as Car[];

export const fetchCars = (): Car[] => {
  if (!Array.isArray(cars)) {
    throw new Error("Invalid cars data format");
  }
  return cars;
};

export const getCarById = (id: string): Car => {
  const car = cars.find((car) => car.id === id);
  if (!car) {
    throw new Error(`Car with id ${id} not found`);
  }
  return car;
};
