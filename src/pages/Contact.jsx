import {AiOutlineInstagram,AiOutlineGithub,AiOutlineTwitter} from "react-icons/ai"
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <>
      <section className="contactSection">
        <div className="contactContainer">
          <div className="contactHeader">
            <p>Get in Touch With Us</p>
          </div>

          <div className="contactBody">
            <motion.div
              initial={{ y: -30 }}
              whileInView={{ y:0 }}
              transition={{duration: 0.7}}
             className="ContactFormContainer">
              <p>Send us a message</p>
              <div className="contactFormInputs">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
              </div>

              <div className="contactforminputTwo">
                <input type="text" placeholder="Your Gmail" />

                <textarea name="" placeholder="Message"></textarea>
              </div>

              <div className="contactSend">
                <button>send</button>
              </div>
            </motion.div>

            <div className="contactInfoContainer">
              <div className="contactInfoHeader">
                <p>Contact info</p>
              </div>

              <div className="contactInfo">
                <p>Phone: +2348085492521</p>
                <p>Email: excelemma6@gmail.com</p>
                <p>socials</p>

                <nav className="contactInfoLinks">
                  <a href=""><AiOutlineInstagram/></a>
                  <a href=""><AiOutlineGithub/></a>
                  <a href=""><AiOutlineTwitter/></a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
