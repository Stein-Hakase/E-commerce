import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Switch,Route} from 'react-router-dom'
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInUp from './Pages/SignIn-page/SignIn-page';
import {auth} from './firebase/firebase.utils'

class  App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser:null,
    }
  }
  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({
        currentUser:user,
       
      })

    })
  }
  componentWillUnmount(){
    console.log(this.unsubscribeFromAuth)
    this.unsubscribeFromAuth()
  }
  render(){
  return (
    <div >
        <Header currentUser={this.state.currentUser} />
       <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/sign-in' component={SignInUp}/>
       </Switch>
    </div>
  )}
}

export default App;
