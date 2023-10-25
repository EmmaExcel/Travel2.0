import Travel from "../../assets/travelLogo.png"
export const Footer = () => {
  return (
    <>
        <section className='footerSection'>
            <div className="footerContainer">
                <div className="footerHeader">
                    <img src={Travel} alt="" />
                </div>

                <div className="footerFormContainer">
                    <p>Subscribe to stay</p>

                    
                        <div className="footerForm">
                            <input type="text" placeholder='Enter your email Address'/>
                            <button>Subscribe</button>
                        </div>
                   

                    <div className="footerCopyContainer">
                        <div className="footercopy">
                            <p>© 2023 All Rights Reserved</p>
                        </div>
                        <div className="footerNav">
                            <p>Privacy Policy</p>
                            <p>Terms of Use</p>
                            <p>Sales and Refunds</p>
                            <p>Legal</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
