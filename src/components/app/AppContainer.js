import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../../views/home/Home"
import GuestBook from "../../views/guest/GuestBook"
import FriendLink from "../../views/friend/FriendLink"
import CategorizeArticles from "../../views/article/CategorizeArticles"
import ArticleDetail from "../../views/article/ArticleDetail"
import "./AppContainer.less"

export default () => {
    return (
        <div className="app-container">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/guestbook" component={GuestBook} />
                <Route path="/links" component={FriendLink} />
                <Route path="/tag/:id" component={CategorizeArticles} />
                <Route path="/post/:id" component={ArticleDetail} />
            </Switch>
        </div>
    )
}
