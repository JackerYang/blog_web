import { get, post, put } from "../axios"

// 登录
export const login = params => post("/sys/login", params)

// 修改密码
export const updatePwd = params => put("/sys/update/password", params)

// 获取信息
export const getUserInfo = () => get("/sys/user/info")