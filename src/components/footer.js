import "./footerStyles.css"
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"

import React from "react"

const Footer = () => {
    return(
        <div className="Footer">
            <div className="Footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>1. Irakli Tatishvili</p>
                            <p>Tbilisi, Georgia</p>
                        </div>
                    </div>
                    <div className="Phone">
                        <h4>
                            <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                            +995 595 56 37 90
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                            ipapashvili11@gmail.com
                        </h4>
                    </div>
                </div>
                
                <div className="right">
                    <h4>About the company</h4>
                    <p>This is me, Ivan Papashvili. Junior Frontend Developer.
                    I enjoy discuss new projects and design chalenges.
                    </p>
                    <div className="social">
                        <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                        <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                        <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer