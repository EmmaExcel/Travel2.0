import { GoSearch, GoLocation } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Love from "../assets/loveicon.svg"

import first from "../assets/explore/image3.png";
import second from "../assets/explore/image5.png";
import third from "../assets/explore/image6.png";
import fourth from "../assets/explore/image4.png";
export const Explore = () => {
  return (
    <section className="exploreSection">
      <div className="exploreHeaderContainer">
        <div className="exploreHead">
          <h1>Explore</h1>
          <h1>The World</h1>
        </div>

        <div className="exploreP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sem
          suspendisse tristique habitant consectetur cursus at. Leo in eget
          convallis nunc rhoncus nulla m
        </div>
      </div>

      <div className="exploreSearchContainer">
        <div className="exploreSearch">
          <GoSearch />
          <input type="text" placeholder="Search for Tourist centers, location"/>
          <button>
            <BsArrowRight />
          </button>
        </div>
      </div>

      <div className="explorePo">
        <p>Popular Searches</p>
      </div>

      <div className="exploreGrid">
        <div className="ExploreGridContainer">
          <motion.div initial={{opacity:0 , x: 200}} whileInView={{opacity:1 , x:0}} transition={{type:"spring"}} className="div1">
            <img src={first} alt="" />
            <div className="div1-info">
              <div className="name">
                <p>Agbokim waterfalls</p>
                <p>
                  <GoLocation /> Nigeria, cross river state
                </p>
              </div>

              <div className="rating">
                <img id="love" src={Love} alt="" />
                <p>4321</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0 , x: -200}} whileInView={{opacity:1 , x:0}} transition={{type:"spring"}} className="div2">
            <img src={second} alt="" />

            <div className="div2-info">
              <div className="name">
                <p>Great Wall of China</p>
                <p>
                  <GoLocation /> Beijing
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0 , y: 100}} whileInView={{opacity:1 , y:0}} transition={{type:"spring"}} className="div3">
            <img src={third} alt="" />

            <div className="div3-info">
              <div className="name">
                <p>Taj Mahal</p>
                <p>
                  <GoLocation /> Agra
                </p>
              </div>

              <div className="rating">
                <img id="love" src={Love} alt="" />
                <p>4322</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0 , x: 200}} whileInView={{opacity:1 , x:0}} transition={{type:"spring"}} className="div4">
            <img src={fourth} alt="" />

            <div className="div4-info">
              <div className="name">
                <p>Taj Mahal</p>
                <p>
                  <GoLocation /> Agra
                </p>
              </div>
            </div>

            <div className="div4-ratingC">
              <div className="div4-rating">
                <img id="love" src={Love} alt="" />
                <p>21153</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="seeMore">
        <p>See more</p>
      </div>
    </section>
  );
};
