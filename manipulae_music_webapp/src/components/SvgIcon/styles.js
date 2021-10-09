import styled from "styled-components";

export const Svg = styled.svg`
    display: block;
    fill: ${(props) => props.color};
`;

export const Wrapper = styled.div`
    height: 3.2rem;
    width: 3.2rem;
    display: flex;

    margin-right: 1.4rem;

    align-items: center;
    justify-content: center;
`;
