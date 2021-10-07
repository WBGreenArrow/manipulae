import React, { useEffect } from "react";

import handlerDuration from "../../utils/formatDurationMusic";

import {
    WapperList,
    ListContent,
    HeaderList,
    ListTracks,
    Track,
    Title,
    Id,
    WrapperAlbum,
    Cover,
    Artist,
    Duration,
} from "./styles";

const ListMusic = ({ tracks, isloadState, loadMoreTracks }) => {
    //Infinit Scroll
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                loadMoreTracks(10);
            }
        });
        const sentinelElement = document.getElementById("sentinel");

        if (sentinelElement) {
            intersectionObserver.observe(sentinelElement);
        }

        return () => intersectionObserver.disconnect();
    }, [isloadState]);

    return (
        <WapperList>
            <ListContent>
                {!isloadState && (
                    <HeaderList>
                        <span>#</span>
                        <span>Album</span>
                        <span>Faixa</span>
                        <span>Artista</span>
                        <span>D.</span>
                        <span>Favorite</span>
                    </HeaderList>
                )}
                <ListTracks>
                    {tracks?.map((track, index) => (
                        <Track key={track.id}>
                            <Id>{index + 1}</Id>
                            <WrapperAlbum>
                                <Cover src={track.album.cover_small} />
                            </WrapperAlbum>
                            <Title>{track.title}</Title>
                            <Artist>{track.artist.name}</Artist>
                            <Duration>{handlerDuration(track.duration)}</Duration>
                        </Track>
                    ))}
                    {!isloadState && <li id='sentinel' style={{ height: "5px", background: "red" }} />}
                </ListTracks>
            </ListContent>
        </WapperList>
    );
};

export default ListMusic;
