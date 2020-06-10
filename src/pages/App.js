import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "../components/app/AppHeader";
import AppContainer from "../components/app/AppContainer";
import AppFooter from "../components/app/AppFooter";
import "./App.less";

export default () => {
    return (
        <div className="app">
            <BrowserRouter>
                <AppHeader />
                <AppContainer />
                <AppFooter />
            </BrowserRouter>
        </div>
    );
}
