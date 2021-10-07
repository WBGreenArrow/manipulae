import React from "react";
import { Svg, Wrapper } from "./styles";

const SvgIcon = ({ path }) => {
    return (
        <Wrapper>
            <Svg width='20' height='20' viewBox='0 0 24 24'>
                {path}
            </Svg>
        </Wrapper>
    );
};

export default SvgIcon;
