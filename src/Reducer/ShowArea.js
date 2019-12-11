import React, { useContext } from 'react';
import { ColorContext } from './color';

function ShowArea() {
    /* 从父组件中取颜色 */
    const { color } = useContext(ColorContext)

    return (<div style={{ color: color }}>字体颜色为{color}</div>)

}
export default ShowArea