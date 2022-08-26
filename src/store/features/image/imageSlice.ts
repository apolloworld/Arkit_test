import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchImageData } from "./pixabayAPI";

export interface ImageItem {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  fullHDURL: string;
  imageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

export type ImageState = {
  isLoading: boolean;
  imageList: ImageItem[];
  error: string | undefined;
};

const initialState: ImageState = {
  imageList: [],
  error: undefined,
  isLoading: false,
};

export const searchImagesAsync = createAsyncThunk(
  "image/searchImages",
  async ({ searchKeyword }: { searchKeyword: string }) => {
    try {
      console.log("Hello1")
      const repoData = await fetchImageData(searchKeyword);
      console.log("Hello2");
      return repoData;
    } catch (err: any) {
      console.log("Hello3");
      if (err.response) {
        throw new Error(err.response?.data.message);
      }
      throw err;
    }
  }
);

export const imageSlice = createSlice({
  name: "image",
  initialState,
  /**
   * RTK uses Immer internally, so you can "mutate" the state as it's only a draft.
   * https://redux-toolkit.js.org/usage/immer-reducers#redux-toolkit-and-immer
   */
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchImagesAsync.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(searchImagesAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.imageList = action.payload.hits;
      })
      .addCase(searchImagesAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        //console.log(action.error);
      });
  },
});

export const imageActions = imageSlice.actions;

export const imageReducer = imageSlice.reducer;
