import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.less"
import Main from "./pages/Main"

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="" exact={true} component={Main} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
