import React from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './component/About'
import Home from './component/Home'
import NoMatch from './component/Error'
import Profile from './component/Profile'
import queryString from 'query-string'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";

const User = (props)=>{
  console.log(props);
  // const params = new URLSearchParams(props.location.search)//URLSearchParams获取params值
  // console.log(params.get('a'))
  const value = queryString.parse(props.location.search)
  console.log(value)
  return (
    props.match.params.name==='Alex'?
    <Redirect to='/'/>:<div>User {props.match.params.name}</div>
  )
}

// const MenuLink = ({children,exact,to})=>{
//   console.log(children,exact,to,window,'About')
//   console.log(window.location.pathname ,'window.location.pathname ')
//   const match = window.location.pathname === to
// return (
//   <NavLink activeStyle={match?{
//     fontWeight: "bold",
//     color: "red"
//   }:{}} to={to}>
//     {match?'>':''}{children}
//   </NavLink>
// )
// }

// const MenuLink = ({children,exact,to})=>{
//   console.log(children,exact,to,window,'About')
//   console.log(window.location.pathname ,'window.location.pathname ')
//   const match = window.location.pathname === to
// return (
//   <Route path={to} exact={exact} children={(match)=>{
//     return (
//       <NavLink activeStyle={match?{
//         fontWeight: "bold",
//         color: "red"
//       }:{}} to={to}>
//         {match?'>':''}{children}
//       </NavLink>
//     )
//   }}/>
   
// )
// }


function App() {
  return (
  <Router>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
    </div> */}
    <ul>
      <li>
        {/* <MenuLink exact={true} to='/'>
            Home
        </MenuLink> */}
        <NavLink exact to='/'
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>
          Home
        </NavLink>
      </li>
      <li>
        {/* <MenuLink exact={true} to='/about'>
           About
        </MenuLink> */}
        <NavLink exact to='/about' 
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>
        About
        </NavLink>
      </li>
      <li>
        <NavLink exact to='/profile' 
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>
        Profile
        </NavLink>
      </li>
      <li>
        <NavLink exact to='/user/Lily?a=b' 
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>
        user
        </NavLink>
      </li>
      <li>
        <NavLink exact to='/error' 
      activeStyle={{
        fontWeight: "bold",
        color: "red"
      }}>
        Error
        </NavLink>
      </li>
      <li>
        <Link to={{
           pathname: "/user/Alex",
            search: "?sort=name",
            hash: "#the-hash",
            state: { fromDashboard: true }}}//这个state的值在props.location.state里面
     >
        Pro
        </Link>
      </li>
    </ul>
    {/* 
    exact 是否只匹配某个路径，不写的话 比如/about这个会先匹配/ ，然后匹配/about 会显示这两个页面的内容，如果写了就只显示一个页面的

    strict，是否路径要完全匹配 /about/ 不显示about

    Switch 用于path不存在的页面和其他页面不共同显示 NoMatch和其他页面
    
     */}
     <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/profile' component={Profile} exact/>
      <Route path='/about' component={About} exact/>
      <Route path='/new_home' render={()=><div>welcome new Home</div>} exact/>
      <Route path='/other_home' render={(props)=><Home {...props} name='Alex'/>} exact/>
      <Route path='/user/:name' component={User}/>
      <Redirect from ='/user/:name' to='/about'/> {/*重定向，根据条件判断 */}
      <Route  component={NoMatch}/>
    </Switch>
  </Router>
  );
}

export default App;
