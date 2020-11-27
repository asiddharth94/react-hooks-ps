import React from "react";

import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primarySrc="/static/speakers/bw/b-w.jpg"
        secondarySrc="/static/speakers/color.jpg"
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
