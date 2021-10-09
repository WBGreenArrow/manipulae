import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    border: ${(props) => props.styles.border_color};

    @media (max-width: 760px) {
        border: none;
    }
`;

export const WrapperContent = styled.div`
    width: 100%;
    height: 100%;
`;
