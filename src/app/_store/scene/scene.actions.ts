import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { PropertyPatch } from "src/app/_interfaces/property-patch";
import { SvgObject } from "src/app/_interfaces/svg-object";

export const SceneActions = createActionGroup({
  source: 'Scene',
  events: {
    'Patch Object': props<{ objectId: string; patch: PropertyPatch }>(),
    'Add Object': props<{ object: SvgObject }>(),
    'Start New Object': props<{ object: SvgObject }>(),
    'Patch New Object': props<{ patch: PropertyPatch }>(),
    'Approve New Object': emptyProps(),
    'Start Override': props<{ objectId: string }>(),
    'Patch Override': props<{ patch: Partial<SvgObject> }>(),
    'Clear Override': emptyProps(),
  }
})