import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordine from "./components/accordian/Accordine";
import RandomColor from "./components/randomColor/RandomColor";
import StarRating from "./components/starRating/StarRating";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Accordine />
      <RandomColor />
      <StarRating noOfStars={10} />
    </>
  );
}

export default App;
