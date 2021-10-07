import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import api from "../../services/api";

import { level1, level2 } from "../../utils/filterLevel";

import ListMusic from "../../components/ListMusic";

function Home() {
    const dispatch = useDispatch();

    const [loadMoreTracks, setLoadMoreTracks] = useState(15);

    const [isloadState, setIsLoadState] = useState(true);

    const [filteredTracks, setFilteredTracks] = useState([]);

    const [filterValueSelect, setFilterValueSelect] = useState("artist");

    const { tracks, filterValue } = useSelector(({ tracks }) => ({
        tracks: tracks.hits_moment,
        filterValue: tracks.filter_input,
    }));

    useEffect(() => {
        api.get(`/playlist/1111141961?limit=${loadMoreTracks}`)
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
    }, [tracks, filterValue]);

    return (
        <ListMusic
            tracks={filteredTracks}
            isloadState={isloadState}
            loadMoreTracks={(value) => setLoadMoreTracks((c) => c + value)}
        />
    );
}

export default Home;
