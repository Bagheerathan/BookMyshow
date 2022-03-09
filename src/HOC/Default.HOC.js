import React from "react";
import {Route} from "react-router-dom";

//Layouts
import DefalultLayout from "../Layouts/Default.layout";

const DefautltHOC = ({component: Component, ...rest}) => {

    return (
        <>
        <Route
        {...rest}
        component={(props) => (
            <DefalultLayout>
                <Component {...props}/>
            </DefalultLayout>
        )}
        />
        </>
    );
}

export default DefautltHOC;