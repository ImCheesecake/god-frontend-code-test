import React from "react";
import CarReel from "../src/components/CarReel";
import { Car } from "../types/car";
import { getIndexProps } from "../lib/staticGeneration";

interface IndexProps {
  cars: Car[];
}

export default function Index({ cars }: IndexProps) {
  return <CarReel cars={cars} />;
}

export const getStaticProps = getIndexProps;
