import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 115.8rem;
    display: flex;
    padding-top: 2.4rem;
    padding-left: 2.4rem;
    margin-bottom: 5.5rem;
`;

export const AlbumImg = styled.span`
    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: cover;
    width: 17.2rem;
    height: 17.2rem;
    border-radius: 0.8rem;
    overflow: hidden;
    margin-right: 3.2rem;
    position: relative;
`;

export const TextWrapper = styled.div``;

export const TrackTitle = styled.h1`
    font-size: 3.2rem;
`;
export const TrackArtist = styled.h2`
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 1rem;
`;

export const ButtonDeezer = styled.div`
    background-color: ${(props) => props.styles.secondary_color};
    width: 23rem;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;

    a {
        color: white;
        display: flex;
        justify-content: baseline;
        align-items: center;
        font-size: 2rem;
        padding: 0.5rem 0;
        div {
            padding: 0 0.3rem;
        }
    }
`;

export const TogglePlay = styled.span`
    width: 5.2rem;
    height: 5.2rem;
    cursor: pointer;
    background: #4fd8ca;
    border: none;
    position: absolute;
    right: 1rem;
    border-radius: 50%;
    bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 150ms ease-in-out;
    &:hover {
        background: #70cbc2;
        transform: scale(1.2, 1.2);
    }
`;
