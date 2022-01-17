import { useState } from "react";
import "./myworks.css";
// 1:56:36
function Myworks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "It's Just Me",
      img: "myworks/MyPortfolio.png",
    },
    {
      id: "2",
      title: "illustrator Skater boy",

      img: "myworks/skate-boy.png",
    },
    {
      id: "3",
      title: "illustrator Ice Cream",
      img: "myworks/Ice-Cream.png",
    },
    {
      id: "4",
      title: "illustrator GrandPa",
      img: "myworks/grandPa.png",
    },
    {
      id: "5",
      title: "illustrator My Neightbour",
      img: "myworks/man.png",
    },
    {
      id: "6",
      title: "illustrator Floating Man",
      img: "myworks/strange_man.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 5)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="myworks" id="myworks">
      <h1 className="title">My Works</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <h2>{d.title}</h2>
              <div className="inner-img">
                <img src={d.img} alt="imagee" className="img" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/arr.png"
        className="arrow left"
        alt="arrow"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arr.png"
        className="arrow right"
        alt="arrow"
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default Myworks;
