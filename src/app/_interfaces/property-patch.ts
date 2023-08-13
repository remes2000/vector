import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

export type PropertyPatch = 
  | Partial<Rectangle>
  | Partial<Circle>;