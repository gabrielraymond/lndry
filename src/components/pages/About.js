import React from 'react';
import ContactSection from '../ContactSection';
import { objDataOne } from "../Data";
import HeroSection from '../HeroSection';

function About() {
    return (
        <>
            <HeroSection {...objDataOne[0]}  bgClr="#F4D160" imgStart="start"/>
            <ContactSection />
        </>
    )
}

export default About
