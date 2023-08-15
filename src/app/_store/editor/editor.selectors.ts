import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EditorState } from "./_interfaces";
import { FEATURE_MODULE_NAME } from "./_consts";

const featureSelector = createFeatureSelector<EditorState>(FEATURE_MODULE_NAME);

export const selectEditorMode = createSelector([featureSelector], ({ mode }) => mode);

export const selectSelectedObject = createSelector([featureSelector], ({ selectedObject }) => selectedObject);

export const selectDrag = createSelector([featureSelector], ({ drag }) => drag);