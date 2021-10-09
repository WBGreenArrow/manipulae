import React from "react";

import SearchIcon from "../../assets/search-icon.svg";

import { TopBar, SearchButton, InputElem, Select } from "./styles";

import { useDispatch } from "react-redux";

import * as type from "../../store/modules/tracks/types";

import styles from "../../styles/root";

const TopBarComponent = () => {
    const dispatch = useDispatch();

    return (
        <TopBar styles={styles}>
            <SearchButton>
                <img src={SearchIcon} alt='icon-search' />
            </SearchButton>
            <Select
                onChange={({ target }) => dispatch({ type: type.SET_FILTER_SELECT, filter_select: target.value })}
                styles={styles}
            >
                <option value='title'> Título</option>
                <option value='artist'>Artista</option>
            </Select>
            <InputElem
                placeholder='Buscar'
                onChange={({ target }) => dispatch({ type: type.SET_FILTER_IPUNT, filter_input: target.value })}
            />
        </TopBar>
    );
};

export default TopBarComponent;
