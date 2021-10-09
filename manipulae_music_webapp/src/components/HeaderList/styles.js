import styled from "styled-components";

export const HeaderListElement = styled.div`
    max-width: 115.8rem;
    display: flex;
    flex-direction: row;
    padding-left: 5.8rem;
    border-top: ${(props) => props.styles.border_color};

    & > span {
        font-size: 1.2rem;
        text-transform: uppercase;
        color: ${(props) => props.styles.primary_color};
        height: 5rem;
        display: flex;
        align-items: center;
    }
    & > span:nth-child(1) {
        justify-content: center;
        width: 3.1rem;
    }
    & > span:nth-child(2) {
        width: 10rem;
    }
    & > span:nth-child(3) {
        width: 25rem;
    }
    & > span:nth-child(4) {
        width: 16rem;
    }
    & > span:nth-child(5) {
        width: 6rem;
        margin-right: 2rem;
    }
    & > span:nth-child(6) {
        width: 6rem;
    }
`;
