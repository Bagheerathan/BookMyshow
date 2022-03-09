import React from "react";

import NavBar from "../Component/Navbar/navbar.component"; 
import HeroCarousal from "../Component/HeroCarousel/HeroCarousel.component";

const DefalultLayout = (props) => {
    return (
        <>
            <div>
                <NavBar />
                <HeroCarousal />
                {props.children}
            </div>
        </>
    );
} 

export default DefalultLayout; 