import love from "../assets/love.svg";
import tick from "../assets/formIcon/tick.svg";
import first from "../assets/freePackage/first.png";
import second from "../assets/freePackage/second.png";
import third from "../assets/freePackage/third.png";
import { motion } from "framer-motion";

export const FreePackage = () => {
  const data = [
    {
      id: 1,
      name: "Colosseum",
      Image: first,
      location: "Rome",
      rate: 3245,
      text: "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age.",
    },
    {
      id: 2,
      name: "Grand Canyon",
      Image: second,
      location: "Arizona",
      rate: 4321,
      text: "The Grand Canyon in Arizona is a natural formation distinguished by layered bands of red rock, revealing millions of years of geological history in cross-section. Vast in scale, the canyon averages 10 miles across and a mile deep along its 277-mile length",
    },
    {
      id: 3,
      name: "Christ the Redeemer",
      Image: third,
      location: "Rio de Janeiro",
      rate: 6676,
      text: "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot.",
    },
  ];

  return (
    <section className="freePackageSection">
      <div className="freePackageContainer">
        <div className="freePackageHeader">
          <div className="freePackageHead">
            <h1>Free</h1>
            <h1>Package</h1>
          </div>

          <p>
            Join our communities to stand a chance to win our free offers to one
            of these tourist centers.
          </p>
        </div>

        <div className="freePackageLocationContainer">
          {data.map((item) => (
            <motion.div
            initial={{opacity: 0}}
              whileInView={{ opacity:1 }}
              transition={{ type: "spring", stiffness: 100, duration: 0.9 }}
              className="freeBoxContainer"
              key={item.id}
            >
              <div className="freeBoxMain">
                <div className="freeBoxingImgContainer">
                  <img src={item.Image} alt={item.name} />
                </div>

                <div className="freeBoxName">
                  <p>{item.name}</p>
                  <img src={love} alt="love" />
                </div>

                <div className="freeBoxLocationContainer">
                  <div className="freeBoxLocation">
                    <img src={tick} alt="" />
                    <p>{item.location}</p>
                  </div>

                  <p className="locationBoxRate">{item.rate}</p>
                </div>

                <div className="freeBoxText">
                  <p>{item.text}</p>
                </div>

                <button className="joinCommunity">Join Community</button>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="see">see more</button>
      </div>
    </section>
  );
};
