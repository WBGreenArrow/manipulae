import styled from "styled-components";

export const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 5.5rem;
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

    &::placeholder {
    }
`;
