import styled from "styled-components";

export const SideBar = styled.div`
    width: 21.9rem;
    height: 100%;
    border-top: none;
    border: ${(props) => props.color};
`;

export const MenuWrapper = styled.ul`
    display: flex;
    width: 17rem;
    margin-top: 6rem;
    justify-content: center;
    flex-direction: column;
    padding-left: 1.4rem;
`;

export const Item = styled.li`
    margin-bottom: 1.4rem;
    .nav-link {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${(props) => props.color};
    }
    &:hover {
        .nav-link {
            color: rgb(112, 203, 194);
        }
        path {
            fill: rgb(112, 203, 194);
        }
    }
`;

export const Title = styled.h1`
    width: 100%;
    font-size: 1.8rem;
    font-weight: 700;
`;
