import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../types";

const imageSelector = (state: AppState) => state.image;

export const imageListSelector = createSelector(imageSelector, (state)=> ({
  imageList: state.imageList,
  isLoading: state.isLoading,
  error: state.error,
}));

export const repoIsLoadSelector = createSelector(
  imageSelector,
  (state) => state.isLoading
);
export const repoErrorSelector = createSelector(
  imageSelector,
  (state) => state.error
);
