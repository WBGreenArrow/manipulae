import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    WapperList,
    ListContent,
    ListTracks,
    Track,
    Title,
    Id,
    WrapperAlbum,
    Cover,
    Artist,
    Duration,
    Favorite,
    Wrapper,
} from "../../components/ListMusic/styles";

import handlerDuration from "../../utils/formatDurationMusic";

import HeaderList from "../../components/HeaderList";

import { ButtonDeezer } from "./styles";

import heartIcon from "../../assets/heart-icon-favorited.svg";

import deezerIcon from "../../assets/deezer-logo.png";

import styles from "../../styles/root";

/*eslint-disable*/

const Favorites = () => {
    const dispatch = useDispatch();

    const { favorites, active_router } = useSelector(({ tracks }) => ({
        favorites: tracks.favorites,
        active_router: tracks.active_router,
    }));

    useEffect(() => {
        if (active_router === "favorites") {
            dispatch({ type: "SET_PLAY", track_to_play: [] });
        }
    }, []);

    return (
        <>
            {favorites && <HeaderList />}
            <WapperList styles={styles}>
                <ListContent>
                    <ListTracks>
                        {favorites?.map((track, index) => (
                            <Track key={track.id} styles={styles}>
                                <Wrapper
                                    onClick={() => {
                                        dispatch({ type: "SET_PLAY", track_to_play: track });
                                    }}
                                >
                                    <Id>{index + 1}</Id>
                                    <WrapperAlbum>
                                        <Cover src={track.album.cover_small} />
                                    </WrapperAlbum>
                                    <Title>{track.title}</Title>
                                    <Artist>{track.artist.name}</Artist>
                                    <Duration>{handlerDuration(track.duration)}</Duration>
                                </Wrapper>
                                <Favorite onClick={() => dispatch({ type: "SET_FAVORITE_TRACKS", favorites: track })}>
                                    <img src={heartIcon} alt='icon-favorite' />
                                </Favorite>
                                <ButtonDeezer styles={styles}>
                                    {track?.link && (
                                        <div>
                                            <a href={track?.link} target='_blank' rel='noreferrer'>
                                                <div> Ouvir no </div>
                                                <div>
                                                    <img src={deezerIcon} alt='logo-deezer'></img>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                </ButtonDeezer>
                            </Track>
                        ))}
                    </ListTracks>
                </ListContent>
            </WapperList>
            ;
        </>
    );

    // <ListMusic track={favorites} />;
};

export default Favorites;
