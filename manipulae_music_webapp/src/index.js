import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";

import Home from "./pages/Home";

import Favorite from "./pages/Favorites";

import styles from "./styles/root";
import "./styles/font-global.css";

import { Container, WrapperContent } from "./styles";

import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Container styles={styles}>
                    <SideBar />
                    <WrapperContent>
                        <TopBar />
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/favorites' exact component={Favorite} />
                        </Switch>
                    </WrapperContent>
                </Container>
            </BrowserRouter>
            <GlobalStyles />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
