import { get, post, put, del } from "../axios"

// 获取全部列表
export const getCategoryList = () => get("/category/list")

// 获取分页列表
export const getCategoryPage = params => get("/category/page", params)

// 获取一个分类
export const getCategory = params => get("/category", params)

// 添加分类
export const addCategory = params => post("/category", params)

// 修改分类
export const editCategory = params => put("/category", params)

// 删除分类
export const delCategory = params => del("/category", params)