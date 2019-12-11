import React from 'react';
import ShowArea from './ShowArea';
import Buttons from './Buttons';
import { Color } from './color';

function ChangeColor() {

    return (
        <div>
            {/* 用createcontext包裹状态组件模块 */}
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default ChangeColor