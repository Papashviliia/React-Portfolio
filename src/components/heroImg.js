import "./heroImgStyle.css"
import IntroImg from "../assets/heroImage.png"
import React from "react"
import { Link } from "react-router-dom"


const HeroImg = () => {
    return(
        <div className="hero">
            <div className="mask">
                <img className="into-img"
                src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>I'M A FREELANCER</p>
                <h1>React Developer.</h1>
                <div className="">
                    <Link to="/Projects"
                    className="btn">Projects</Link>
                    <Link to="/Contact"
                    className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg;