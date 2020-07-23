const KEY = "blog_web_token"

/**
 * 获取 token
 */
export const getToken = () => {
    return sessionStorage[KEY] || null
}

/**
 * 设置 token
 * @param {String} token
 */
export const setToken = token => {
    sessionStorage[KEY] = token
}

/**
 * 删除 token
 */
export const delToken = () => {
    sessionStorage.removeItem(KEY)
}