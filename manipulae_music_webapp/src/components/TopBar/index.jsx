import React from "react";
import SearchIcon from "../../assets/search-icon.svg";
import { TopBar, SearchButton, InputElem } from "./styles";
import { useDispatch } from "react-redux";

const TopBarComponent = () => {
    const dispatch = useDispatch();
    return (
        <TopBar>
            <SearchButton>
                <img src={SearchIcon} alt='icon-search' />
            </SearchButton>
            <InputElem
                placeholder='Buscar'
                onChange={({ target }) => dispatch({ type: "SET_FILTER_IPUNT", filter_input: target.value })}
            />
        </TopBar>
    );
};

export default TopBarComponent;
