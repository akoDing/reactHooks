import React from 'react';

function UseRef() {
    // 也可以通过解构的方式从React把hooks取出来
    const { useRef, useState, useEffect } = React

    // 起手先声明useRef， 可以传递null 也可以不传递
    const inputEl = useRef(null)
    const textRef = useRef()

    const [text, setText] = useState('world')
    const [count, setCount] = useState(0); // 数组解构

    // 只有影响到useState的变化才会触发useEffect的副作用函数
    useEffect(() => {
        // 利用textRef保存一个text变量
        textRef.current = text;
        // 副作用函数调用设置inputEl当前的value值
        inputEl.current.value = text;
        console.log('textRef.current:', textRef.current)
    }, [text])

    // 点击方法，要用匿名的箭头函数方式
    const onButtonClick = () => {
        inputEl.current.value = "Hello ,world"
        console.log(inputEl) //输出获取到的DOM节点
    }
    return (
        <>
            {/* jsx语法 */}
            <button onClick={() => { setCount(count + 1) }}>click me</button>
            <br />
            <br />
            {/*保存input的ref到inputEl */}
            {/* 获得input的dom元素 */}
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br />
            <br />
            {/* react为单向数据流， 实现input双向绑定 */}
            {/*  onChange事件 */}
            <input value={text} onChange={(ev) => { setText(ev.target.value) }} />
            <h1>{text}</h1>
        </>
    )
}
export default UseRef