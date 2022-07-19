import React from "react";
import MovieNavbar from "../Component/Navbar/Movie.navbar.Component";

const MovieLayout = (props) => {
    return (
        <>
            <div>
                <MovieNavbar />
                {props.children}
            </div>
        </>
    );
} 

export default MovieLayout; 