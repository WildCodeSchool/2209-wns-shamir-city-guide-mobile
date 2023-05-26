import { ICategory } from "./category";
import { ICity } from "./city";
import { IPoi } from "./poi";

export interface ICircuit {
  id: string;
  name: string;
  picture: string;
  description: string;
  city: ICity;
  category: ICategory;
  pois: IPoi[];
}