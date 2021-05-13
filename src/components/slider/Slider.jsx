//Core
import React from "react";
import cx from "classnames";
import { useSelector, useDispatch } from "react-redux";
//CSS
import styles from "./slider.module.scss";
//STORE
import { store } from "../../store/store";
//ACTIONS
import {
  showNextPhoto,
  showSelectedImg,
  showPrevPhoto,
} from "../../store/actions/galleryActions";

const Slider = () => {
  const {
    gallery: { photos, selectedImgIndex },
  } = store.getState();
  const img = photos.find((_, index) => index === selectedImgIndex);

  const state = useSelector((state) => state);
  const statePhotos = state.gallery.photos;
  const dispatch = useDispatch();

  const clickShowNextPhoto = () => dispatch(showNextPhoto());
  const clickShowPrevPhoto = () => dispatch(showPrevPhoto());
  const clickShowSelectedImg = (ev) =>
    dispatch(showSelectedImg(ev.target.value));

  //AddActiveClassBtn
  const activeClass = `${styles[`slider-btn`]} ${styles[`active`]}`;
  const isAddActiveClassBtn = (index) => {
    return cx(`${styles[`slider-btn`]}`, {
      [activeClass]: selectedImgIndex === index,
    });
  };

  return (
    <div className={styles[`slider`]}>
      <h1 className={styles[`slider-title`]}>
        Slider work with redux and save state in redux
      </h1>
      <div className={styles[`slider-wrapper`]}>
        <div className={styles[`slider-content`]}>
          <img src={img.url} alt="" className={styles[`slider-img`]} />
        </div>
        <div className={styles[`slider-footer`]}>
          <button className={styles[`slider-btn`]} onClick={clickShowPrevPhoto}>
            &#171;
          </button>
          {statePhotos.map((item, index) => {
            return (
              <button
                key={`btn-key__${index}`}
                value={String(index)}
                onClick={clickShowSelectedImg}
                className={isAddActiveClassBtn(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className={styles[`slider-btn`]} onClick={clickShowNextPhoto}>
            &#187;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
