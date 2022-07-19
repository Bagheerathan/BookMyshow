import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/Poster.component";

export const Primier = () => {
    const settings = {
        Infinity: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0
    };

    const PremierImages = [
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00321259-fyxfcgmgdl-portrait.jpg",
            alt: "image1",
            title: "Dune",
            subtittle: "English",
            
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00301315-mhbmravnfb-portrait.jpg",
            alt: "image2",
            title: "let Him go",
            subtittle: "English",
            
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00321259-fyxfcgmgdl-portrait.jpg",
            alt: "image1",
            title: "Dune",
            subtittle: "English",
            
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00301315-mhbmravnfb-portrait.jpg",
            alt: "image2",
            title: "let Him go",
            subtittle: "English",
            
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00321259-fyxfcgmgdl-portrait.jpg",
            alt: "image1",
            title: "Dune",
            subtittle: "English",
            
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00301315-mhbmravnfb-portrait.jpg",
            alt: "image2",
            title: "let Him go",
            subtittle: "English",
            
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00321259-fyxfcgmgdl-portrait.jpg",
            alt: "image1",
            title: "Dune",
            subtittle: "English",
            
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00301315-mhbmravnfb-portrait.jpg",
            alt: "image2",
            title: "let Him go",
            subtittle: "English",
            
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00321259-fyxfcgmgdl-portrait.jpg",
            alt: "image1",
            title: "Dune",
            subtittle: "English",
            
        } 
    ];

    return (
        <>
            <div className="flex flex-col items-start gap-1 py-4">
                <h3 className="text-white text-xl font-bold">Premires</h3>
                <p className="text-white text-sm">Brand new release every Sunday</p>
            </div>

            <Slider {...settings}>
                {PremierImages.map((image)=>(
               <Poster {...image} isDark/>
               ))}
            </Slider>
        </>
    )
}

export default Primier;