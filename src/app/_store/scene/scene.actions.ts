import { createAction, createActionGroup, props } from "@ngrx/store";
import { PropertyPatch } from "src/app/_interfaces/property-patch";

export const SceneActions = createActionGroup({
  source: 'Scene',
  events: {
    'Patch Object': props<{ objectId: string; patch: PropertyPatch }>(),
  }
})