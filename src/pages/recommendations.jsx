import travel from "../assets/services/travel.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import tick from "../assets/formIcon/tick.svg";
import Play from "../assets/playButton.svg";
import { motion } from "framer-motion";

export const Recommendations = () => {

  function SlideNextButton() {
    const swiper = useSwiper();

    return (
      <button className="next" onClick={() => swiper.slideNext()}>
        {">"}
      </button>
    );
  }
  function SlidePrevButton() {
    const swiper = useSwiper();

    return (
      <button className="prev" onClick={() => swiper.slidePrev()}>
        {"<"}
      </button>
    );
  }

  return (
    <section className="recommendationSection">
      <div className="recommendationContainer">
        <div className="recommendationHeader">
          <img src={travel} alt="" />
          <p>Best
          <span>recommendations</span>
          </p>
        </div>

        <div className="recommendationSliderContainer">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="recomSlider">
                <motion.div
                  initial={{ x: -100 }}
                  whileInView={{ x:0 }}
                  transition={{duration: 0.5}}
                  className="recomTextBoxContainer"
                >
                  <div className="recomTextBoxHead">
                    <p>Forbidden City</p>
                    <div className="recomTextBoxLocation">
                      <img src={tick} />
                      <p>Beijing</p>
                    </div>
                  </div>

                  <div className="recomTextBoxParagraph">
                    <p>
                      The Forbidden City (Chinese: 紫禁城; pinyin: Zǐjìnchéng)
                      is a palace complex in Dongcheng District, Beijing, China,
                      at the center of the Imperial City of Beijing. It is
                      surrounded by numerous opulent imperial gardens and
                      temples including the 22 ha (54-acre) Zhongshan Park, the
                      sacrificial Imperial Ancestral Temple, the 69 ha
                      (171-acre) Beihai Park, and the 23 ha (57-acre) Jingshan
                      ParkThe Forbidden City was constructed from 1406 to 1420,
                      and was the former Chinese imperial palace and winter
                      residence of the Emperor of China from the Ming dynasty
                      (since the Yongle Emperor) to the end of the Qing dynasty,
                      between 1420 and 1924.
                    </p>
                  </div>
                  <div className="takeTour">
                    <button>Take a Tour</button>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                  transition={{duration: 0.6}}
                  className="recomImgContainer">
                  <img
                    className="recomImg"
                    src={
                      "https://images.unsplash.com/photo-1551101509-fd2fa880106e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt=""
                  />
                  <div className="playButton">
                    <img className="play" src={Play} alt="" />
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="recomSlider">
                <motion.div
                  initial={{ x: -100 }}
                  whileInView={{ x:0 }} 
                  transition={{duration: 0.5}}
                  className="recomTextBoxContainer">
                  <div className="recomTextBoxHead">
                    <p>Grand Canyon</p>
                    <div className="recomTextBoxLocation">
                      <img src={tick} />
                      <p>Arizona</p>
                    </div>
                  </div>

                  <div className="recomTextBoxParagraph">
                    <p>
                      The Grand Canyon in Arizona is a natural formation
                      distinguished by layered bands of red rock, revealing
                      millions of years of geological history in cross-section.
                      Vast in scale, the canyon averages 10 miles across and a
                      mile deep along its 277-mile length
                    </p>
                  </div>
                  <div className="takeTour">
                    <button>Take a Tour</button>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                  transition={{duration: 0.6}}
                  className="recomImgContainer">
                  <img
                    className="recomImg"
                    src={
                      "https://images.unsplash.com/photo-1535044243240-144dc3ae56a5?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt=""
                  />
                  <div className="playButton">
                    <img src={Play} alt="" />
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>

            <div className="sliderNav">
              <SlidePrevButton />
              <SlideNextButton />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
