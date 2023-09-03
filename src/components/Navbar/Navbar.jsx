import "./Navbar.css";
import logo from "../../assets/travelLogo.png";
export const Navbar = () => {
  return (
    <>
      <div className="NavContainer">
        <div className="NavLogo">
          <img src={logo} alt="" />
        </div>
        <div className="NavLinks">
          <a className="Navlinks active" href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>
        </div>
        <div className="NavJoin">
          <a href="">Join us</a>
        </div>
      </div>
    </>
  );
};
