import { createActionGroup, emptyProps } from "@ngrx/store";

export const HistoryActions = createActionGroup({
  source: 'History',
  events: {
    'Undo': emptyProps(),
    'Redo': emptyProps()
  }
})