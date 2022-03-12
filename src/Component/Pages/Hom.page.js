import React from "react"


import EnetertaimentCardSlider from "../Entertainment/Entertainment.component";
import Primier from "../Premier/Premier.component";

const Homepage = () => {
    return (
        <>
            <div className="container mx-auto px-12">
            <h1 className="text-2xl font-bolt text-gray-900 my-3">The best of Entertainment</h1>
            <EnetertaimentCardSlider />
            <Primier />
            </div>
        </>
    );
};

export default Homepage;