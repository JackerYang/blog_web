import React from "react";
import Home from "../../views/Home";
import GuestBook from "../../views/GuestBook";
import { Route, Switch } from "react-router-dom";

export default () => {
    return (
        <div className="app-container">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/guestbook" component={GuestBook} />
            </Switch>
        </div>
    );
}
