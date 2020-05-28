import React from "react";
import "./App.less";
import AppHeader from "../components/app/AppHeader";
import AppContainer from "../components/app/AppContainer";
import { BrowserRouter } from "react-router-dom";

export default () => {
    return (
        <div className="app">
            <BrowserRouter>
                <AppHeader />
                <AppContainer />
            </BrowserRouter>
        </div>
    );
}
