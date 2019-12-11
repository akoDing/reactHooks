import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

//===关键代码
const CountContext = createContext()

function Counter() {
    const count = useContext(CountContext)  //一句话就可以得到count
    return (<h2>Counter1:{count}</h2>)
}

function CounterProps(props) {
    const { data } = props;  // 对象解构
    return (<h2>CounterProps:{data}</h2>)
}

function Index() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！Index页面')
        // 组件销毁，解绑操作
        return () => {
            console.log('老弟，你走了!Index页面')
        }
    }, [])
    return <h2>JSPang.com</h2>;
}

function List() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！List页面')
    }, [])
    return <h2>List-Page</h2>;
}

function HookCount() {
    const [count, setCount] = useState(0); // 数组解构

    //---关键代码---------start-------
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)
        return () => {
            console.log('====================')
        }
    }, [count])
    //---关键代码---------end-------

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>

            {/*======关键代码 */}
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>

            <CounterProps data={count}></CounterProps>

            {/* 路由 */}
            <Router>
                <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li> <Link to="/list/">列表</Link> </li>
                </ul>
                {/* 路由跳转 */}
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>

        </div>
    )
}
export default HookCount;