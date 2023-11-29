import React, { useEffect, useState } from "react";
import { data } from "./Assets";
function ImageCorousel() {
  const [image, setImage] = useState(0);

  const handlePrevClick = () => {
    // if (image === 0) setImage(data.length - 1);
    // else setImage(image - 1);
    setImage(!image ? data.length - 1 : image - 1);
  };

  const handleNextClick = () => {
    setImage((image + 1) % data.length);
  };

  //to change image automatically after some interval
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 5000);

    //this will clear the timer when rendering the pic
    return () => {
      clearTimeout(timer);
    };
  }, [image]);

  return (
    <div className="d-flex justify-content-center">
      <button onClick={handlePrevClick}>Previous</button>
      {data.map((url, i) => (
        <img
          src={url}
          // this is condition based rendering if the index of an image is same as the index then only image will be shown otherwise hidden
          className={image === i ? "d-block" : "d-none"}
          style={{ width: "50%", height: "50%" }}
          alt="wallpaper"
        />
      ))}
      <button
        onClick={handleNextClick}
        style={{ height: "20%", marginLeft: "20px" }}
      >
        Next
      </button>
    </div>
  );
}

export default ImageCorousel;
