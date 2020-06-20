import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../views/Home";
import GuestBook from "../../views/GuestBook";
import FriendLink from "../../views/FriendLink";
import Articles from "../common/article/Articles";
import ArticleDetail from "../common/article/ArticleDetail";
import "./AppContainer.less";

export default () => {
    return (
        <div className="app-container">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/guestbook" component={GuestBook} />
                <Route path="/links" component={FriendLink} />
                <Route path="/tag/:id" component={Articles} />
                <Route path="/post/:id" component={ArticleDetail} />
            </Switch>
        </div>
    );
}
