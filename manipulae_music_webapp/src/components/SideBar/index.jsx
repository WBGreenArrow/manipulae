import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as type from "../../store/modules/tracks/types";

import { SideBar, MenuWrapper, Item, Title } from "./styles.js";
import styles from "../../styles/root.js";
import Logo from "../Logo";

import SvgIcon from "../SvgIcon";

function SideBarComponent() {
    const dispatch = useDispatch();

    const { active_router } = useSelector(({ tracks }) => ({
        active_router: tracks.active_router,
    }));

    return (
        <SideBar color={styles.border_color}>
            <Logo />
            <MenuWrapper>
                <Item
                    onClick={() => dispatch({ type: type.SET_ACTIVE_ROUTER, active_router: "home" })}
                    color={active_router === "home" ? "rgb(112, 203, 194)" : "rgb(82, 82, 93)"}
                >
                    <Link to='/' className='nav-link'>
                        <SvgIcon
                            color={active_router === "home" ? "rgb(112, 203, 194)" : "rgb(82, 82, 93)"}
                            path={
                                <path d='m19.684 5.821-9-3.272A1.998 1.998 0 0 0 8 4.428v6.129A3.953 3.953 0 0 0 6 10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V4.428L19 7.7v6.856A3.962 3.962 0 0 0 17 14c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7.7c0-.838-.529-1.594-1.316-1.879zM6 16c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm11 4c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z'></path>
                            }
                        />
                        <Title>Musicas</Title>
                    </Link>
                </Item>
                <Item
                    onClick={() => dispatch({ type: type.SET_ACTIVE_ROUTER, active_router: "favorites" })}
                    color={active_router === "favorites" ? "rgb(112, 203, 194)" : "rgb(82, 82, 93)"}
                >
                    <Link to='/favorites' className='nav-link'>
                        <SvgIcon
                            color={active_router === "favorites" ? "rgb(112, 203, 194)" : "rgb(82, 82, 93)"}
                            path={
                                <path d='M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z'></path>
                            }
                        />
                        <Title>Favoritos</Title>
                    </Link>
                </Item>
            </MenuWrapper>
        </SideBar>
    );
}

export default SideBarComponent;
