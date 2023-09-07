import travel from "../assets/services/travel.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export const Recommendations = () => {
  return (
    <section className="recommendationSection">
      <div className="recommendationContainer">
        <div className="recommendationHeader">
          <img src={travel} alt="" />
          <p>Best</p>
          <span>recommendations</span>
        </div>

        <div className="recommendationSliderContainer">
          <CarouselProvider
            naturalSlideWidth={500}
            naturalSlideHeight={525}
            totalSlides={3}
            className="testing"
          >
            <Slider>
              <Slide index={0}>
               <div className="recomSlider">
               <div className="recomTextBoxContainer">{/*  SIDE TEXT BOX */}</div>
                <div className="recomImgContainer">{/* IMAGE SLIDER */}</div>
               </div>
              </Slide>
            </Slider>

            <div className="">
              {/* SLIDER BUTTON LEFT AND RIGHT */}
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </div>


          </CarouselProvider>
        </div>
      </div>
    </section>
  );

  /*  return (
    <div className="testingSection">
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={15}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  ); */
};
