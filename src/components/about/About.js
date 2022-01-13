import "./about.css";
//1.10.51
function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imageCont">
          <img src="assets/my_photo.png" alt="photoo" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, My Name Is</h2>
          <h1>Misho Ghibradze</h1>
          <h3>
            Freelance <span></span>
          </h3>
        </div>
        <a href="#works">
          <img src="assets/down-arrow.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
}

export default About;
