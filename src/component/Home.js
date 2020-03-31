import React from 'react'
import {withRouter} from 'react-router'

const Hello = (props)=>{
    return (
        <div>
            <button onClick={()=>{return props.history.push('/about')}}>
                hello
            </button>
        </div>
    )
}
const WithRouterHello = withRouter(Hello)//通过高阶组件withRouter获得props
const Home = (props)=>{
    console.log(props)
    return (
        <div>
         <button onClick={()=>props.history.push('/about')}>home click</button>
          <p> Home page</p> 
          <WithRouterHello />
        </div>
    )
}
export default Home