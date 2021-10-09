import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/manipulae-music.png";
import { LogoImg } from "./styles";

const Logo = () => {
    return (
        <Link to='/'>
            <LogoImg src={img} />
        </Link>
    );
};

export default Logo;
