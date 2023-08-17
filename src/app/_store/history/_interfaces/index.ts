import { SvgObject } from "src/app/_interfaces/svg-object";

export interface HistoryState {
  past: SvgObject[],
  future: SvgObject[]
}