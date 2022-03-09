import React from "react";
import { BiChevronRight } from "react-icons/bi";

const NavSm = () => {
    return (
        <>
            <div className="w-full bg-red-800">
                <nav>
                    <h3>it's all start here!</h3>
                    <span>
                        <select name="Vavuniya" id="cars">
                            <option value="colombo">colombo</option>
                            <option value="Vavuniya">Vavuniya</option>
                        </select>
                        <BiChevronRight />
                    </span>
                </nav>
            </div>
        </>
    );
};

const NavMd = () => {
    return (
        <div></div>
    );
};

const NavLg = () => {
    return (
        <div></div>
    );
};

const NavBar = () => {
    return (
        <>
            <nav>

                <div className="md:hidden">{/*mobileSC*/}
                    <NavSm />
                </div>

                <div className="hidden md:flex  lg:hidden">{/*largeSc*/}</div>

                <div className="hidden lg:flex">{/*largeSc*/}
                </div>
            </nav>
        </>
    );
};

export default NavBar;