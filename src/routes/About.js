import React from "react";
import Footer from "../components/footer"
import Navbar from "../components/navbar";
import HeroImg2 from "../components/HeroImg2";

const About = () => {
    return (
    <div>
        <Navbar />
        <HeroImg2 heading="ABOUT." text="I am a friendly Front-End Developer"/>
        <Footer />  
    </div>);
};
export default About;