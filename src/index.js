import { ConfigProvider } from "antd"
import zh_CN from "antd/lib/locale-provider/zh_CN"
import moment from "moment"
import "moment/locale/zh-cn"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

moment.locale("zh-cn")

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={zh_CN}>
            <App />
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById("root")
)
