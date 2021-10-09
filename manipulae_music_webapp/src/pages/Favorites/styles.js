import styled from "styled-components";
export const ButtonDeezer = styled.span`
    width: 15rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        background-color: ${(props) => props.styles.secondary_color};

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;

        a {
            color: white;
            display: flex;
            justify-content: baseline;
            align-items: center;
            font-size: 1.2rem;
            padding: 0.5rem 0;
            div {
                padding: 0 0.3rem;
            }
            div img {
                width: 8rem;
            }
        }
    }
`;
