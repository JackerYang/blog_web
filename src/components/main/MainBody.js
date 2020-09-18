import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import "./MainBody.less"

const MainBody = () => {
    const Home = lazy(() => import("../../views/Home"))
    const Article = lazy(() => import("../../views/Article"))
    const Topic = lazy(() => import("../../views/Topic"))
    return (
        <div className="MainBody">
            <div className="MainBody-container">
                <Suspense fallback={false}>
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/article" exact={true} component={Article} />
                        <Route path="/topic" exact={true} component={Topic} />
                    </Switch>
                </Suspense>
            </div>
        </div>
    )
}

export default MainBody
