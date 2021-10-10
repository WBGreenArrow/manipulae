import React from "react";

import { useEffect, useState, useMemo } from "react";

import { Wrapper, AlbumImg, TextWrapper, TrackTitle, TrackArtist, ButtonDeezer, TogglePlay } from "./styles";
import styles from "../../styles/root";

import coverAlbumBackground from "../../assets/music.jpg";
import pauseIcon from "../../assets/pause-icon.svg";
import playIcon from "../../assets/play-icon.svg";
import deezerIcon from "../../assets/deezer-logo.png";

const InforTrack = ({ track_to_play }) => {
    const audio = useMemo(() => new Audio(track_to_play.preview), [track_to_play]);

    const [isPlaying, setPlaying] = useState(false);
    /*eslint-disable*/

    useEffect(() => {
        if (track_to_play.preview) {
            audio.play();
            setPlaying(true);
        }

        return () => {
            audio.pause();
            setPlaying(false);
        };
    }, [track_to_play]);

    useEffect(() => {
        audio.addEventListener("ended", () => setPlaying(false));

        return () => {
            audio.removeEventListener("ended", () => setPlaying(false));
        };
    }, [audio]);

    /*Button TogglePlay state*/
    const handlePlay = () => {
        isPlaying ? audio.pause() : audio.play();
        setPlaying(!isPlaying);
    };

    return (
        <Wrapper>
            <AlbumImg src={(track_to_play && track_to_play?.album?.cover_medium) || coverAlbumBackground}>
                {track_to_play?.album?.cover_medium && (
                    <TogglePlay onClick={handlePlay}>
                        <img
                            src={isPlaying ? pauseIcon : playIcon}
                            alt='pause-icon'
                            style={{ width: "52px", height: "52px" }}
                        />
                    </TogglePlay>
                )}
            </AlbumImg>
            <TextWrapper>
                <TrackTitle>{(track_to_play && track_to_play?.title) || "Selecione uma Musica"}</TrackTitle>
                <TrackArtist>{(track_to_play && track_to_play?.artist?.name) || "..."}</TrackArtist>
                <ButtonDeezer styles={styles}>
                    {track_to_play?.link && (
                        <a href={track_to_play?.link} target='_blank' rel='noreferrer'>
                            <div className='text'> Ouvir no </div>
                            <div className='logo-deezer'>
                                <img src={deezerIcon} alt='logo-deezer'></img>
                            </div>
                        </a>
                    )}
                </ButtonDeezer>
            </TextWrapper>
        </Wrapper>
    );
};

export default InforTrack;
