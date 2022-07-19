import React from "react"


import EnetertaimentCardSlider from "../Entertainment/Entertainment.component";
import Primier from "../Premier/Premier.component";

const Homepage = () => {
    return (
        <>
            <div className="flex flex-col gap-9">
                <div className="container mx-auto px-12">
                    <h1 className="text-2xl font-bolt text-gray-900 my-3">The best of Entertainment</h1>
                    <EnetertaimentCardSlider />
                </div>

                <div className="bg-bms-700 py-16">
                    <div className="w-full mx-auto px-19 x container" >
                        <img
                            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="premier"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-full mx-auto px-19 x container" >
                        <Primier />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Homepage;