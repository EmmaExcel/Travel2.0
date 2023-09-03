import "../App.css";
import first from "../assets/leftFirst.png";
import second from "../assets/leftSsecond.png";
import third from "../assets/leftThird.png";

export const Landing = () => {
  return (
    <>
      <section className="LandingSection">
        <div className="LandingRightContainer">
          <div className="RightHeader">
            <div className="dis">
              <h2>Discover</h2> <p>New</p>
            </div>

            <h1>Experiences</h1>
          </div>

          <div className="RightText">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              sem suspendisse tristique habitant consectetur cursus at. Leo in
              eget convallis nunc rhoncus nulla m
            </p>
          </div>

          <div className="RightButton">
            <button>Explore</button>
          </div>
        </div>

        <div className="LandingLeftContainer">
          <div className="LeftImageContainer">
            <img src={first} alt="" />
            <img src={second} alt="" />
            <img src={third} alt="" />
          </div>

          <div className="LeftTextContainer">
            <div className="LeftText">
              <p>Tourist</p>
              <b>25.5k</b>
            </div>

            <div className="LeftText">
              <p>Tourist Guide</p>
              <b>2k+</b>
            </div>

            <div className="LeftText">
              <p>Tourist Center</p>
              <b>1.1+k</b>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
