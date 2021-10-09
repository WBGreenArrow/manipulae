import styled from "styled-components";

export const TopBar = styled.div`
    max-width: 115.8rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 2rem;
    height: 5.5rem;
    border-bottom: ${(props) => props.styles.border_color};
`;

export const FormElem = styled.form`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 2.4rem;
    height: 3.5rem;
`;

export const SearchButton = styled.button`
    width: 3.2rem;
    height: 3.2rem;
    background: none;
    border: none;
`;

export const InputElem = styled.input`
    width: 36.5rem;
    height: 3.2rem;
    margin-left: 1.4rem;
    border: none;
    outline: none;
    font-size: 1.6rem;
`;

export const Select = styled.select`
    outline: none;
    height: 2.5rem;
    border: none;
    border-bottom: ${(props) => props.styles.border_color};
    color: ${(props) => props.styles.primary_color};
`;
