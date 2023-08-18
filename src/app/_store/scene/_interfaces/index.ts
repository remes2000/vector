import { SvgObject } from "src/app/_interfaces/svg-object";

export type SceneState = {
  objects: SvgObject[];
  newObject: SvgObject;
  override: { id: string } & Partial<SvgObject>;
}
