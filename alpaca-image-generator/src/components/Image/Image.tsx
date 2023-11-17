import React from "react";
import { FeaturesStyle } from "../Data/FeatureStylesData";

import "./Image.css";

export const Image = () => {
  const listImages = FeaturesStyle.map((image) => (
    <img
      src={image.path + image.activeStyle + ".png"}
      alt={image.activeStyle}
    />
  ));

  return (
    <>
      <div>{listImages}</div>
    </>
  );
};
