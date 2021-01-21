import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import "./MainBody.less"

const MainBody = () => {
    const Home = lazy(() => import("../../views/Home"))
    const Article = lazy(() => import("../../views/Article"))
    return (
        <div className="main-body">
            <div className="main-body-container">
                <Suspense fallback={false}>
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/article" exact={true} component={Article} />
                    </Switch>
                </Suspense>
            </div>
        </div>
    )
}

export default MainBody
