import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import api from "../../services/api";

import { level1, level2 } from "../../utils/filterLevel";

import ListMusic from "../../components/ListMusic";
import InforTrack from "../../components/InforTrack";

/*eslint-disable*/

function Home() {
    const dispatch = useDispatch();

    const [loadMoreTracks, setLoadMoreTracks] = useState(31);

    const [isloadState, setIsLoadState] = useState(true);

    const [filteredTracks, setFilteredTracks] = useState([]);

    const [filterValueSelect, setFilterValueSelect] = useState("");

    const { tracks, filterValue, favorites, filter_select, track_to_play } = useSelector(({ tracks }) => ({
        tracks: tracks.hits_moment,
        filterValue: tracks.filter_input,
        favorites: tracks.favorites,
        filter_select: tracks.filter_select,
        track_to_play: tracks.track_to_play,
    }));

    useEffect(() => {
        const favorites = localStorage.getItem("favorites");
        if (favorites) {
            dispatch({ type: "SET_ALL_FAVORITES", favorites: JSON.parse(favorites) });
        }
    }, []);

    useEffect(() => {
        api.get(`/chart/?limit=${loadMoreTracks}`)

            .then((response) => {
                const {
                    data: {
                        tracks: { data },
                    },
                } = response;

                //sending data to redux
                dispatch({ type: "SET_TRACKS", hits_moment: data });

                setIsLoadState(false);
            })
            .catch((err) => console.log(err));
    }, [loadMoreTracks]);

    useEffect(() => {
        setFilterValueSelect(filter_select);
        if (filterValue) {
            let valueFiltered = [];
            switch (filterValueSelect) {
                case "title":
                    valueFiltered = level1(tracks, "title", filterValue);
                    break;

                case "artist":
                    valueFiltered = level2(tracks, "artist", "name", filterValue);
                    break;

                default:
                    break;
            }

            setFilteredTracks(valueFiltered);
        } else {
            setFilteredTracks(tracks || []);
        }
    }, [tracks, filterValue, favorites]);

    return (
        <>
            <InforTrack track_to_play={track_to_play} />
            <ListMusic
                tracks={filteredTracks}
                isloadState={isloadState}
                loadMoreTracks={(value) => setLoadMoreTracks((c) => c + value)}
            />
        </>
    );
}

export default Home;
