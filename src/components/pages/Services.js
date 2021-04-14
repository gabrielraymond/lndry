import React from 'react';
import ContactSection from '../ContactSection';
import { objDataOne } from "../Data";
import HeroSection from '../HeroSection';

function Services() {
    return (
        <div >
            <HeroSection {...objDataOne[1]}  bgClr="#F4D160" imgStart="start" headingClr="#fff"/>
            <ContactSection />
        </div>
    )
}

export default Services;
