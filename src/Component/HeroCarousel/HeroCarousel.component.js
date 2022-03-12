import React from "react";
import HeroSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const settings = {
        arrows: true,
        centerMode: true,
        centerPadding: "150px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const images = ["https://cdn.britannica.com/15/136615-050-52769A00/Teatro-Farnese-Parma-Italy.jpg", "https://cdn.britannica.com/28/99528-050-BE26CC00/Teatro-alla-Scala.jpg", "https://cdn.britannica.com/96/121396-050-7E197540/Teatro-Olimpico-Vicenza-Italy-Andrea-Palladio-Vincenzo-1585.jpg", "https://cdn.britannica.com/71/189871-050-B3525558/theatre-Greek-times-Roman-Taormina-Italy-Sicily.jpg"];

    return (
        <>
            <HeroSlider {...settings}>
                {images.map((image) => (
                    <div className="w-20 h-80">
                        <img src={image} alt="movie"  className="w-full h-full"/>
                    </div>
                )
                )
                }
            </HeroSlider>
        </>
    );
};


export default HeroCarousal;
