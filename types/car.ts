export type BodyType = "suv" | "estate" | "sedan";
export enum ModelType {
  Hybrid = "plug-in hybrid",
  Electric = "pure electric",
}
export interface Car {
  id: string;
  modelName: string;
  bodyType: BodyType;
  modelType: ModelType;
  imageUrl: string;
}
