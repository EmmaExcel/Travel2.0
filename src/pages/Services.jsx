import Travel from "../assets/services/travel.png";
import ServiceImgOne from "../assets/services/image7.png";
import ServiceImgTwo from "../assets/services/image8.png";
import ServiceImgThree from "../assets/services/image9.png";
import { motion } from "framer-motion";
import 'swiper/css';
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
            <motion.p
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 , delay: 0.1}}
              className="box-number"
            >
              01
            </motion.p>
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="boxtext"
            >
              <p>Best Hotels</p>
              <p>
                Lorem ipsum dolor sit acus nulla mLorem ipsum dolor sit acus
                nulla m
              </p>
            </motion.div>
            <div className="mainbox">
              <img src={ServiceImgOne} alt="" />
            </div>
          </div>
        </div>

        <div className="servicesBoxContainer">
          <div className="servicesBox">
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 ,delay: 0.1}}
              className="box-number"
            >
              02
            </motion.p>
            <motion.div
              initial={{ x: -80 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="boxtext"
            >
              <p>Tourist Guide</p>
              <p>
                Lorem ipsum dolor sit acus nulla mLorem ipsum dolor sit acus
                nulla m
              </p>
            </motion.div>
            <div className="mainbox">
              <img src={ServiceImgTwo} alt="" />
            </div>
          </div>
        </div>

        <div className="servicesBoxContainer">
          <div className="servicesBox">
            <motion.p
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="box-number"
            >
              03
            </motion.p>
            <motion.div
              initial={{ x: -70 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="boxtext"
            >
              <p>Flight Tickets </p>
              <p>
                Lorem ipsum dolor sit acus nulla mLorem ipsum dolor sit acus
                nulla m
              </p>
            </motion.div>
            <div className="mainbox">
              <img src={ServiceImgThree} alt="" />
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};
