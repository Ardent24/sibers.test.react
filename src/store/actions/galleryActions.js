import { SHOW_NEXT_IMG, SHOW_SELECTED_IMG, SHOW_PREV_IMG } from "./types";

export const showNextPhoto = () => {
  return { type: SHOW_NEXT_IMG };
};

export const showPrevPhoto = () => {
  return { type: SHOW_PREV_IMG };
};

export const showSelectedImg = (photoIndex) => {
  return {
    type: SHOW_SELECTED_IMG,
    payload: photoIndex,
  };
};
