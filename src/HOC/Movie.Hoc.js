import React from "react";
import {Route} from "react-router-dom";

//Layouts
import MovieLayout from "../Layouts/Movie.Layout";

const MovieltHOC = ({component: Component, ...rest}) => {

    return (
        <>
        <Route
        {...rest}
        component={(props) => (
            <MovieLayout>
                <Component {...props}/>
            </MovieLayout>
        )}
        />
        </>
    );
}

export default MovieltHOC;