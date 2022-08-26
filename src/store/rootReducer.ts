import { AnyAction, combineReducers } from "@reduxjs/toolkit";

import { imageReducer } from "./features/image/imageSlice";

const combinedReducer = combineReducers({
  image: imageReducer,
});

export const rootReducer = (
  state: ReturnType<typeof combinedReducer> | undefined,
  action: AnyAction
) => {
  return combinedReducer(state, action);
};
