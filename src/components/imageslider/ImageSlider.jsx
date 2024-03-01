import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Styles.css";

const ImageSlider = ({ url, limit = 10, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);

      console.log("response", response);

      const data = await response.json();

      console.log("data", data);

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  console.log("length", images.lenth);
  useEffect(() => {
    fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading Data. Please Wait</div>;
  }

  if (errorMessage !== null) {
    return <div>Error Message occured {errorMessage}</div>;
  }

  return (
    <>
      <center>
        <div style={{ color: "red" }}>
          <h1>Fourth Project about Image Slider</h1>
        </div>
        <div className="container">
          <BsArrowLeftCircleFill
            onClick={() => handlePrevious()}
            className="arrow arrow-left"
          />
          {images && images.length
            ? images.map((item, index) => {
                return (
                  <div>
                    <img
                      key={item.id}
                      src={item.download_url}
                      alt={item.download_url}
                      className={
                        currentSlide === index
                          ? "current-image"
                          : "currrent-image hide-current-image"
                      }
                    />
                  </div>
                );
              })
            : null}
          <BsArrowRightCircleFill
            className="arrow arrow-right"
            onClick={() => handleNext()}
          />
          <span className="circle-indicators">
            {images && images.length
              ? images.map((_, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={
                        currentSlide === index
                          ? "current-indicator"
                          : "current-indicator inactive-indicator"
                      }
                    ></button>
                  );
                })
              : null}
          </span>
        </div>
      </center>
    </>
  );
};

export default ImageSlider;
