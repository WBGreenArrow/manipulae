const INITIAL_STATE = {
    hits_moment: [],
    favorites: [],
    filter_input: "",
};

function tracks(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_TRACKS": {
            return { ...state, hits_moment: action.hits_moment };
        }

        case "SET_FAVORITE_TRACKS": {
            return { ...state, favorites: action.favorites };
        }

        case "SET_FILTER_IPUNT": {
            return { ...state, filter_input: action.filter_input };
        }

        default:
            return state;
    }
}

export default tracks;
