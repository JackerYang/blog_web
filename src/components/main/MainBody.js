import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import "./MainBody.less"

const MainBody = () => {
    const Home = lazy(() => import("../../views/Home"))
    const Article = lazy(() => import("../../views/Article"))
    const ArticleDetail = lazy(() => import("../../views/ArticleDetail"))
    return (
        <div className="main-body">
            <div className="main-body-container">
                <Suspense fallback={false}>
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/article" exact={true} component={Article} />
                        <Route path="/article/:id" exact={true} component={ArticleDetail} />
                    </Switch>
                </Suspense>
            </div>
        </div>
    )
}

export default MainBody
