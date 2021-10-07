import styled from "styled-components";

export const WapperList = styled.div`
    height: calc(100% - 5.5rem);
    padding-left: 2.4rem;
    border-left: none;
    overflow-y: auto;
    border: solid 0.1rem #ececec;
    border-right: none;
    border-left: none;
`;

export const ListContent = styled.div`
    max-width: 115.8rem;
`;

export const HeaderList = styled.div`
    display: flex;
    flex-direction: row;

    & > span {
        font-size: 1.2rem;
        font-family: "Open Sans", sans-serif;
        text-transform: uppercase;
        color: rgb(114, 114, 125);
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
    }
    & > span:nth-child(6) {
        width: 6rem;
    }
`;

export const ListTracks = styled.ul``;

export const Track = styled.li`
    display: flex;
    align-items: center;
    height: 5rem;
    border-top: solid 0.1rem #ececec;
`;

export const Title = styled.h2`
    font-family: "Opens Sans", sans-serif;
    font-size: 1.4rem;
    width: 25rem;
    font-weight: 400;
    color: rgb(25, 25, 25);
`;

export const Id = styled.span`
    width: 3.1rem;
    font-family: "Opens Sans", sans-serif;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WrapperAlbum = styled.div`
    width: 10rem;
`;

export const Cover = styled.img`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 0.5rem;
`;

export const Artist = styled.span`
    width: 16rem;
    display: flex;
    align-items: center;
    font-family: "Opens Sans", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: rgb(25, 25, 25);
`;

export const Duration = styled.span`
    width: 6rem;
    display: flex;
    align-items: center;
    font-family: "Opens Sans", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: rgb(25, 25, 25);
`;
