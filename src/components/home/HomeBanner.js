import avatar from "../../assets/img/avatar.jpg"
import "./HomeBanner.less"

const HomeBanner = () => {
    return (
        <div className="common_card home-banner">
            <img draggable={false} className="banner-img" src="https://file.iviewui.com/asd/asd-pro-3.png" alt="banner" />
            <div className="banner-avatar">
                <img draggable={false} src={avatar} alt="avatar" />
            </div>
            <div className="banner-text">
                <h2>Admin Pro</h2>
                <p>Admin Pro 是一套企业级的通用型中后台前端解决方案，它基于并内置了View UI
                    Pro。支持多种布局，动态菜单，强大的鉴权系统，含有大量典型的业务示例，如用户管理、菜单权限管理、角色权限管理等。</p>
            </div>
        </div>
    )
}

export default HomeBanner
