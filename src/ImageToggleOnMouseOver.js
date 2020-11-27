import React, { useRef } from "react";

function ImageToggleOnMouseOver({ primarySrc, secondarySrc }) {
  const imageRef = useRef(null);

  return (
    <div>
      <img
        onMouseOver={() => {
          imageRef.current.src = secondarySrc;
        }}
        onMouseOut={() => {
          imageRef.current.src = primarySrc;
        }}
        src={primarySrc}
        alt=""
        ref={imageRef}
      ></img>
    </div>
  );
}

export default ImageToggleOnMouseOver;
