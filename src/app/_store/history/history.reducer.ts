import { createReducer, on } from "@ngrx/store";
import { HistoryState } from "./_interfaces";

export const initialState: HistoryState = {
  past: [],
  future: [],
}

export const historyReducer = createReducer(initialState);