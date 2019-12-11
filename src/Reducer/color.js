import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext({})

// 常量决定什么操作
export const UPDATE_COLOR = "UPDATE_COLOR"

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color = props => {

    const [color, dispatch] = useReducer(reducer, 'blue')

    return (
        /* 把color和dispatch传递到子组件中 */
        <ColorContext.Provider value={{ color, dispatch }}>
            <h1>{color}</h1>
            {/* 相当于组件的插槽 */}
            {props.children}
        </ColorContext.Provider>
    )
}