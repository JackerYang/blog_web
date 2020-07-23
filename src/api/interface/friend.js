import { get, post, put, del } from "../axios"

// 获取分页列表
export const getFriendPage = params => get("/friend/page", params)

// 获取一个分类
export const getFriend = params => get("/friend", params)

// 添加分类
export const addFriend = params => post("/friend", params)

// 修改分类
export const editFriend = params => put("/friend", params)

// 删除分类
export const delFriend = params => del("/friend", params)

// 上传头像
export const uploadAvatar = formData => post("/images/friend/avatar/upload", formData)