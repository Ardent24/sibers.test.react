//img
import img1 from "../../components/slider/img/img1.jpg";
import img2 from "../../components/slider/img/img2.jpg";
import img3 from "../../components/slider/img/img3.jpg";
import img4 from "../../components/slider/img/img4.jpg";
import img5 from "../../components/slider/img/img5.jpg";
//types
import { SHOW_NEXT_IMG, SHOW_SELECTED_IMG, SHOW_PREV_IMG } from "../actions/types";

// начальная стадия
const initialState = {
  photos: [
    { id: 1, url: img1 },
    { id: 2, url: img2 },
    { id: 3, url: img3 },
    { id: 4, url: img4 },
    { id: 5, url: img5 },
  ],
  selectedImgIndex: 0,
};

export const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NEXT_IMG:
      if (state.selectedImgIndex === state.photos.length - 1) {
        return state;
      }
      return {
        ...state,
        selectedImgIndex: state.selectedImgIndex + 1,
      };
    case SHOW_PREV_IMG:
      if (state.selectedImgIndex === 0) {
        return state;
      }
      return {
        ...state,
        selectedImgIndex: state.selectedImgIndex - 1,
      };
    case SHOW_SELECTED_IMG:
      return {
        ...state,
        selectedImgIndex: +action.payload,
      };
    default:
      return state;
  }
};
