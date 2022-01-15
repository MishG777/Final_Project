import "./myworks.css";

function Myworks() {
  return (
    <div className="myworks" id="myworks">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
      </div>

      <img src="assets/arr.png" className="arrow left" alt="arrow" />
      <img src="assets/arr.png" className="arrow right" alt="arrow" />
    </div>
  );
}

export default Myworks;
