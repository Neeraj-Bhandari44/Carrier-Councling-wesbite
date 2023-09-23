import React from 'react'
import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { About } from "./about";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";


export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });

const FrontPage = (props) => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
  return (
    <>
        <Navigation name={props.name} loginstatus={props.loginstatus}/>
        
        <Header data={landingPageData.Header} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Testimonials data={landingPageData.Testimonials} />
        <Team data={landingPageData.Team} />
    </>
  )
}

export default FrontPage