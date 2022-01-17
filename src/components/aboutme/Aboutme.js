import { useState } from "react";
import "./aboutme.css";
// import Portfoliolist from "../portfoliolist/Portfoliolist";

function Aboutme() {
  const [about, setAbout] = useState("");
  const [more, setMore] = useState("");

  const aboutText = (
    <h4>
      I love team work and motivation is important for me, which significantly
      effects to the quality of work, I can diagnose the problem and fix it
      quickly, I pay attention to details, also I have some other computer
      skills such as working with MS windows and GNU/LINUX operating systems, I
      really love working and playing with React, It's awsome and I like to move
      forward, to develop, be more creative and to learn something by myself and
      use it during the work and yes let's don't forget about humour and
      communication too.
    </h4>
  );
  const sportText = (
    <h4>
      I love all kind of sports, but when I was a kid my parents just brought me
      a basket and a ball - so that was a place where all the adventures begin,
      I started to do my best to play, to develop, to grow, when i was 10, I
      entered official basketball academy where I continue my work with all my
      new friends and colleagues, but after many years before my graduation I
      left, because I guess that it was just for fun, but not for proffesional
      carrier, but nowadays I watch, I play and I love basketball - so WHY NOT?!
    </h4>
  );

  const loveText = (
    <h4>
      Everyone knows that 2020th year was the worst, because of COVID-19 so
      called Ingenious Coronavirus, but that was the year when i met the love of
      my life, together now and forever, love her so much, As it's a long story
      of love, let's don't talk much.
    </h4>
  );

  const educationText = (
    <h4>
      Nowadays I am a student of business and technology university, studying on
      informational technologies on third course, GPA 3.2+, I graduated from
      Tbilisi N63 Public School, also in 2012-2015 I studied at the Byron School
      of Tbilisi and then I continued my English development with a private
      teacher where I learned B2-C1 level English. Before my last year in school
      I took a C++ course at the Informational Technology Center called
      'Mziuri', In 2017 participating at the International teachers training as
      an upper-intermediate level student was perfect, also as I mentioned
      before in 2020 I took some trainings in GIS- Georgian Integrated Systems
      as an Android Developer. I have some many other skills like working with
      Figma and Adobe XD as an UX/UI designer also I have many other works done
      in Illustrator-After Effects-Media Encoder, Orcale SQL, MYSQL databases,
      also data structures and algorithms, HTML/CSS(Sass)/JS(middle) and of
      course my favourite React Development!
    </h4>
  );

  const carText = (
    <h4>
      My friend and I always talk about cars, always watch movies about cars,
      even play with the cars in our childhood, so it's the moment when one of
      your dreams come true, it was 2019 when I bought a car for me, my "white
      horse" :), I wish to have better and better cars and also I wish to all my
      friend and surrounding to succed and fulfill their dreams!
    </h4>
  );

  const moreText = (
    <a href="#myworks">
      <img className="img" src="assets/down-chevron.png" alt="arrow" />
    </a>
  );

  const aboutChange = () => {
    setAbout(aboutText);
  };

  const sportChange = () => {
    setAbout(sportText);
  };

  const loveChange = () => {
    setAbout(loveText);
  };
  const educationChange = () => {
    setAbout(educationText);
  };
  const carChange = () => {
    setAbout(carText);
  };
  const moreChange = () => {
    setMore(moreText);
  };

  // const [selected, setSelected] = useState("aboutme");

  // const list = [
  //   // {
  //   //   id: "aboutme",
  //   //   title: "About me",
  //   // },
  //   {
  //     id: "sport",
  //     title: "Sport",
  //   },
  //   {
  //     id: "love",
  //     title: "Love",
  //   },
  //   {
  //     id: "education",
  //     title: "Education",
  //   },
  //   {
  //     id: "car",
  //     title: "Car",
  //   },
  //   // {
  //   //   id: "more",
  //   //   title: "More...",
  //   // },
  // ];

  return (
    <div className="works" id="works">
      <h1>About me</h1>
      <h4 className="hovertxt">Hover Over</h4>

      <div className="container">
        <div className="item" onClick={aboutChange}>
          <img src="assets/justme.jpg" alt="photoo" />
          <h3>ME</h3>
        </div>
        <div className="item" onClick={sportChange}>
          <img src="assets/sport.jpg" alt="photoo" />
          <h3>SPORT</h3>
        </div>
        <div className="item" onClick={loveChange}>
          <img src="assets/love.jpg" alt="photoo" />
          <h3>LOVE</h3>
        </div>
        <div className="item" onClick={educationChange}>
          <img src="assets/btu.jpg" alt="photoo" />
          <h3>Education</h3>
        </div>
        <div className="item" onClick={carChange}>
          <img src="assets/car.jpg" alt="photoo" />
          <h3>CAR</h3>
        </div>
        <div className="item" onClick={moreChange}>
          <img src="assets/more.jpg" alt="photoo" />
          <h3>MORE</h3>
        </div>
      </div>

      <div className="text-box">
        <h4>{about}</h4>
      </div>
      <div className="arrow-tools">
        <div className="arrow">
          {more} <h3 className="check">Check my Works Down Below</h3>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
