import { del, get, post, put } from "../axios"

// 获取分页列表
export const getUserPage = params => get("/user/page", params)

// 获取一个分类
export const getUser = params => get("/user", params)

// 添加分类
export const addUser = params => post("/user", params)

// 修改分类
export const editUser = params => put("/user", params)

// 删除分类
export const delUser = params => del("/user", params)

// 上传头像
export const uploadAvatar = formData => post("/images/user/avatar/upload", formData)