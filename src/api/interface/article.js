import { get, post, put, del } from "../axios"

// 获取分页列表
export const getArticlePage = params => get("/article/page", params)

// 获取一个分类
export const getArticle = params => get("/article", params)

// 添加分类
export const addArticle = params => post("/article", params)

// 修改分类
export const editArticle = params => put("/article", params)

// 删除分类
export const delArticle = params => del("/article", params)

// 上传banner图
export const uploadBanner = formData => post("/images/article/banner/upload", formData)