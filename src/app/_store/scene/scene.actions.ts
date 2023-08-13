import { createAction, createActionGroup, props } from "@ngrx/store";
import { SvgObject } from "src/app/_interfaces/svg-object";

export const SceneActions = createActionGroup({
  source: 'Scene',
  events: {
    'Patch Object': props<{ objectId: string; patch: Partial<SvgObject> }>(),
  }
})