// A mock function to mimic making an async request for data
import axios from "axios";

const PIXABAY_API_KEY = "29443265-24d6bb6de63f893c0e7687a5e";
export function fetchImageData(searchKeyword: string) {
  return axios
    .get("https://pixabay.com/api/", {
      params: {
        key: PIXABAY_API_KEY,
        q: searchKeyword,
        image_type: "photo",
      },
    })
    .then((res) => res.data);
}
