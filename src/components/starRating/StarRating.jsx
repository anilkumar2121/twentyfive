import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Styles.css";

const StarRating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);

  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMOuseLeave = () => {
    setHover(rating);
  };

  return (
    <div>
      <div>
        <h1 style={{ color: "red" }}>
          <center>Third Project About Star Rating</center>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "120px",
        }}
      >
        {[...Array(noOfStars)].map((_, index) => {
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMOuseLeave(index)}
              size={40}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
