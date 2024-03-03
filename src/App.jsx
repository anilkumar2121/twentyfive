import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordine from "./components/accordian/Accordine";
import RandomColor from "./components/randomColor/RandomColor";
import StarRating from "./components/starRating/StarRating";
import ImageSlider from "./components/imageslider/ImageSlider";
import LoadMore from "./components/loadmore/LoadMore";
import TreeView from "./components/treeview/TreeView";
import menus from "./components/treeview/data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Accordine />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMore /> */}
      <TreeView  menus={menus}/>
    </>
  );
}

export default App;
