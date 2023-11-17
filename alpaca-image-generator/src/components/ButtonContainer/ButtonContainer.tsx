import React, { useState } from "react";
import { Button } from "../Button/Button";
import { FeaturesStyle } from "../Data/FeatureStylesData";

export const ButtonContainer = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const listAccessorize = FeaturesStyle.map((feature) => (
    <Button onClick={() => setSelectedType(feature.type)}>
      {feature.type}
    </Button>
  ));

  const selectedFeature = FeaturesStyle.find(
    (feature) => feature.type === selectedType
  );
  const listStyle = selectedFeature
    ? selectedFeature.styles.map((style) => <Button>{style}</Button>)
    : null;

  return (
    <>
      <div className="container row">
        <div className="accessorize-container">
          <div className="accessorize-container__title">
            <div>ACCESSORIZE ALPACA'S</div>
          </div>
          <div className="accessorize-container__button col-6">
            {listAccessorize}
          </div>
        </div>
        <div className="style-container">
          <div className="style-container__title">
            <div>STYLE</div>
          </div>
          <div className="style-container__button">{listStyle}</div>
        </div>
      </div>
    </>
  );
};
