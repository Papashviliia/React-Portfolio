import React from "react";
import Footer from "../components/footer"
import Navbar from "../components/navbar";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import WorkCard from "../components/workCard";

const Projects = () => {
    return (
    <div>
        <Navbar />
        <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
        <PricingCard />
        <WorkCard />
        <Footer />  
    </div>);
};

export default Projects;