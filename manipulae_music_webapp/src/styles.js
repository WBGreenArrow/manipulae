import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    border: solid 0.1rem #ececec;
`;

export const WrapperContent = styled.div`
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
        width: 50%;
        overflow: hidden;
        background-color: red;
    }
`;
