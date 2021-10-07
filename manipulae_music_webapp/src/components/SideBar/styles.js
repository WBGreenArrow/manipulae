import styled from "styled-components";

export const SideBar = styled.div`
    width: 21.9rem;
    height: 100%;
    border-top: none;
    border: solid 0.1rem #ececec;
`;

export const MenuWrapper = styled.div`
    display: flex;
    width: 17rem;
    justify-content: center;
    flex-direction: column;
    padding-left: 1.4rem;
`;

export const Item = styled.span`
    color: rgb(82, 82, 93);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 50ms ease-in-out;

    &:hover {
        color: rgb(239, 84, 102);
        path {
            fill: rgb(239, 84, 102);
        }
    }
`;

export const Title = styled.h1`
    width: 100%;
    font-family: "Opens Sans", sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
`;
