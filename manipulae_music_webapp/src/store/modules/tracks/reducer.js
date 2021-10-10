const INITIAL_STATE = {
    hits_moment: [],
    favorites: [],
    track_to_play: [],
    active_router: "home",
    filter_select: "title",
    filter_input: "",
};

function tracks(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_TRACKS": {
            const hits_moment = action.hits_moment.map((track) => {
                const favorite = !!state.favorites?.find(({ id }) => id === track.id);
                return { ...track, favorite };
            });
            return { ...state, hits_moment };
        }

        case "SET_FAVORITE_TRACKS": {
            const hasFavorite = state.favorites.find(({ id }) => id === action.favorites.id);

            let newList = state.favorites;

            if (hasFavorite) {
                newList = state.favorites.filter(({ id }) => id !== action.favorites.id) || [];
            } else {
                newList.push(action.favorites);
            }
            localStorage.setItem("favorites", JSON.stringify(newList));
            return { ...state, favorites: newList };
        }

        case "SET_ALL_FAVORITES": {
            return { ...state, favorites: action.favorites };
        }

        case "SET_PLAY": {
            return { ...state, track_to_play: action.track_to_play };
        }

        case "SET_FILTER_IPUNT": {
            return { ...state, filter_input: action.filter_input };
        }

        case "SET_FILTER_SELECT": {
            return { ...state, filter_select: action.filter_select };
        }

        case "SET_ACTIVE_ROUTER": {
            return { ...state, active_router: action.active_router };
        }

        default:
            return state;
    }
}

export default tracks;
