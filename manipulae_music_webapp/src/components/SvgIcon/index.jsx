import React from "react";
import { Svg, Wrapper } from "./styles";

const SvgIcon = ({ path, color, onClick }) => {
    return (
        <Wrapper onClick={onClick}>
            <Svg width='20' height='20' viewBox='0 0 24 24' color={color}>
                {path}
            </Svg>
        </Wrapper>
    );
};

export default SvgIcon;
