import React from 'react'
import {withRouter} from 'react-router'
import Profile from './Profile'

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
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            profile:''
        }
    }
    profileClick =()=>{
        import('./Profile').then((mod)=>{
            this.setState({
                profile:mod.default
            })
        })
    }
  render(){
    const {profile} = this.state
   console.log(profile,'profile')
    return (
        <div>
         <button onClick={()=>this.props.history.push('/about')}>home click</button>
          <p> Home page</p> 
          <WithRouterHello />
          {
              profile===''?<button onClick={()=>this.profileClick()}>profile in home click</button>: <Profile/>
          }
        </div>
    )
  }
    
}
export default Home