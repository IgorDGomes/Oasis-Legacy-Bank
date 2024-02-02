import React from "react";
import './navbar.css';
import { NavItems } from "../navbar_items/NavItems";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavItems class='active nav_item' name='Home' />
                <NavItems class='nav_item' name='Services' />
                <NavItems class='nav_item' name='Support' />
                <NavItems class='nav_item' name='About Us' />
            </ul>
        </nav>
    );
}

export default Navbar;