import { ActionReducer } from "@ngrx/store";
import { SceneActions } from "../scene/scene.actions";

// TODO REPLACE
// const mutateSceneActions = [
//   SceneActions.addObject,
//   SceneActions.patchObject,
//   SceneActions.approveNewObject,
// ];
const mutateSceneActions = [
  '[Scene] Add Object',
  '[Scene] Patch Object',
  '[Scene] Approve New Object',
];

// any is type of the whole state, I should fill it in
export function historyMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === '[History] Undo') {
      const previousState = state.history.past[0];
      const currentState = state.scene.objects;
      if (!previousState) {
        reducer(state, action);
      }
      return reducer({
        ...state,
        scene: {
          ...state.scene,
          objects: [ ...previousState ],
        },
        history: {
          ...state.history,
          past: state.history.past.slice(1),
          future: [currentState, ...state.history.future],
        },
      }, action);
    }
    if (action.type === '[History] Redo') {
      const futureState = state.history.future[0];
      const currentState = state.scene.objects;
      if (!futureState) {
        reducer(state, action);
      }
      return reducer({
       ...state,
       scene: {
        ...state.scene,
        objects: [ ...futureState ],
       },
       history: {
        ...state.history,
        past: [ currentState, ...state.history.past ],
        future: state.history.future.slice(1),
       },
      }, action);
    }
    if (mutateSceneActions.includes(action.type)) {
      return reducer({
        ...state,
        history: {
          ...state.history,
          past: [state.scene.objects, ...state.history.past],
          future: [],
        },
      }, action);
    }
    return reducer(state, action);
  }
}
