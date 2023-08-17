import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FEATURE_MODULE_NAME } from "./_consts";
import { HistoryState } from "./_interfaces";

const featureSelector = createFeatureSelector<HistoryState>(FEATURE_MODULE_NAME);

export const selectPastStates = createSelector([featureSelector], ({ past }) => past);

export const selectFutureStates = createSelector([featureSelector], ({ future }) => future);
