import locationCheck from "../assets/formIcon/locationtick.svg";
import noteAdd from "../assets/formIcon/noteadd.svg";
import profile from "../assets/formIcon/profile2user.svg";
import star from "../assets/formIcon/star.png"

export const BookFlight = () => {
  return (
    <section className="bookFlightSection">
      <div className="bookFlightContainer">
        <div className="BookFlightLeft"></div>
        <div className="BookFlightRight">
          <div className="bookFlightHeader">
            <p>Book a </p>
            <p>Flight</p> <p> With Us Today</p>
          </div>

          <div className="BookFlightFormContainer">
            <form action="" className="formContainer">
              <div className="formCheckboxContainer">
                <label htmlFor="">
                  <input type="checkbox" name="" id="" />
                  One way
                </label>

                <label htmlFor="">
                  <input type="checkbox" name="" id="" />
                  Round Trip
                </label>
              </div>

              <div className="formInputContainer">
                <div className="leavingFrom">
                  <img src={locationCheck} alt="" />
                  <input type="text" placeholder="Leaving from ..." />
                </div>
                <div className="goingTo">
                  <img src={locationCheck} alt="" />
                  <input type="text" placeholder="Going to ..." />
                </div>

                <div className="formInput2Container">
                  <div className="Depart">
                    <img src={noteAdd} alt="" />
                    <input type="datetime" name="" placeholder="Depart" id="departDate" />
                  </div>
                  <div className="Return">
                    <img src={noteAdd} alt="" />
                    <input type="datetime" placeholder="Return" name="" id="departDate" />
                  </div>
                  <div className="Depart">
                    <img src={profile} alt="" />
                    <input type="datetime" name="" placeholder="Passengers" id="departDate" />
                  </div>
                  <div className="Return">
                    <img src={star} alt="" />
                    <input type="datetime" placeholder="1st class" name="" id="departDate" />
                  </div>


                </div>

                <button>Search Available Flights</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
