import Travel from '../assets/services/travel.png'
import ServiceImgOne from '../assets/services/image7.png'
import ServiceImgTwo from '../assets/services/image8.png'
import ServiceImgThree from '../assets/services/image9.png'
export const Services = () => {
  return (
    <section className="servicesSection">
      <div className="servicesHeader">
        <img src={Travel} alt="" />
        <h1>Services</h1>
      </div>

      <div className="servicesBoxMainContainer">
        <div className="servicesBoxContainer">
          <div className="servicesBox">
            <p className="box-number">01</p>
            <div className="boxtext">
              <p>Best Hotels</p>
              <p>
                Lorem ipsum dolor sit acus nulla mLorem ipsum dolor sit acus
                nulla m
              </p>
            </div>
            <div className="mainbox">
              <img src={ServiceImgOne} alt="" />
            </div>
          </div>
        </div>
        <div className="servicesBoxContainer">
          <div className="servicesBox">
            <p className="box-number">02</p>
            <div className="boxtext">
              <p>Tourist Guide</p>
              <p>
                Lorem ipsum dolor sit acus nulla mLorem ipsum dolor sit acus
                nulla m
              </p>
            </div>
            <div className="mainbox">
              <img src={ServiceImgTwo} alt="" />
            </div>
          </div>
        </div>
        <div className="servicesBoxContainer">
          <div className="servicesBox">
            <p className="box-number">03</p>
            <div className="boxtext">
              <p>Flight Tickets </p>
              <p>
                Lorem ipsum dolor sit acus nulla mLorem ipsum dolor sit acus
                nulla m
              </p>
            </div>
            <div className="mainbox">
              <img src={ServiceImgThree} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
