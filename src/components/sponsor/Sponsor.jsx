import Bo from "../../assets/sponsor/B.png";
import Qatar from "../../assets/sponsor/qatar.png";
import SouthWest from "../../assets/sponsor/southwest.png";
import United from "../../assets/sponsor/united.png";
import "../../App.css"
export const Sponsor = () => {
  return (
    <section className="SponsorContainer">
      <img src={SouthWest} alt="" />
      <img src={Qatar} alt="" />
      <img src={Bo} alt="" />
      <img src={United} alt="" />
    </section>
  );
};
