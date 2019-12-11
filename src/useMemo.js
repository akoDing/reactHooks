import React, { useState, useMemo } from 'react';
// 只要父组件的状态影响到了子组件的内容，子组件里面的方法都会执行。
// 影响了渲染的性能
function UseMemo() {
    const [xiaohong, setXiaohong] = useState('小红待客状态')
    const [zhiling, setZhiling] = useState('志玲待客状态')
    return (
        <>
            <button onClick={() => { setXiaohong(new Date().getTime()) }}>小红</button>
            <button onClick={() => { setZhiling(new Date().getTime() + ',志玲向我们走来了') }}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}

// 子组件函数里面的参数就是父组件传递进来的props的值
// name === xiaohong, children === zhiling
function ChildComponent({ name, children }) {
    function changeXiaohong(name) {
        console.log('她来了，她来了。小红向我们走来了')
        return name + ',小红向我们走来了'
    }

    // const actionXiaohong = changeXiaohong(name)

    // 针对name这个参数在子组件做该参数的方法
    // 从而解决渲染的性能 useMemo去包裹子组件中的方法
    const actionXiaohong = useMemo(() => changeXiaohong(name), [name])
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

export default UseMemo