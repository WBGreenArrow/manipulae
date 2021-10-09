import styled from "styled-components";

export const WapperList = styled.div`
    height: calc(100% - (11.1rem + 25.1rem));
    padding: 0 5.8rem;
    border-left: none;
    overflow-y: auto;
    border: ${(props) => props.styles.border_color};
    border-right: none;
    border-left: none;
    border-bottom: none;

    &::-webkit-scrollbar {
        width: 1rem;
        border-left: 0.1rem solid rgba(82, 82, 93, 0.2);
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(82, 82, 93, 0.3);
        border-radius: 2rem;
        border: none;
    }
`;

export const ListContent = styled.div`
    max-width: 115.8rem;
`;

export const ListTracks = styled.ul``;

export const Track = styled.li`
    display: flex;
    border-top: ${(props) => props.styles.border_color};
    transition: all 50ms ease-in-out;
    &:hover {
        background-color: rgba(219, 219, 222, 0.4);
        border-radius: 0.8rem;
    }
`;

export const Title = styled.h2`
    font-size: 1.4rem;
    width: 20rem;
    margin-right: 5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    color: rgb(25, 25, 25);
`;

export const Id = styled.span`
    width: 3.1rem;
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
    width: 13rem;
    margin-right: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 1.4rem;
    font-weight: 400;
    color: rgb(25, 25, 25);
`;

export const Duration = styled.span`
    width: 6rem;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 400;
    color: rgb(25, 25, 25);
`;

export const Favorite = styled.span`
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        path {
            fill: rgb(112, 203, 194);
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 5rem;
    cursor: pointer;
    flex-direction: row;
`;
