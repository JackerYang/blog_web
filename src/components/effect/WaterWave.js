import React from "react";
import WaterWave from "water-wave";
import "water-wave/style.css";

export default props => {
    // color 颜色值，默认值：#ffffff
    // alpha 透明度，默认值：0.3
    // duration 动画持续毫秒数，默认值：500
    // disabled 是否禁用效果。默认情况下根据父节点是否被disabled决定
    // radius 波浪半径。默认为最大的宽度或长度。手动指定只支持传入一个确定的数字
    // origin 波浪圆心位置，以父节点为参考，类似background-origin，例如auto、 left center、 30% 70%、 100 100。默认值：auto
    // press 触发时机，可选值 up（离开时才触发mouseup touchend）、down（按下去立即触发tocuhstart mousedown）。默认值：up
    // effect 触发效果，可选值 ripple（中心点圆形荡漾效果）、wave（横向线行波纹）、starLight（星光发散效果）、petal（花瓣旋转效果）、helix（螺旋效果）。默认值：ripple,
    // stopPropagation 阻止效果冒泡。通过设置该参数为true，可以阻止父级节点触发效果。默认值：无
    return <WaterWave effect="ripple" color="#fff" press="down" alpha={0.3} duration={300} {...props} />;
}
