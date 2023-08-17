import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { EditorMode } from "src/app/_enums/editor-mode.enum";
import { DragStart } from "src/app/_interfaces/drag-start";

export const setMode = createAction('set mode', props<{ mode: EditorMode }>())

export const EditorActions = createActionGroup({
  source: 'Editor',
  events: {
    'Set Mode': props<{ mode: EditorMode }>(),
    'Select Object': props<{ objectId: string }>(),
    'Start Drag': props<{ drag: DragStart }>(),
    'End Drag': emptyProps(),
  }
})