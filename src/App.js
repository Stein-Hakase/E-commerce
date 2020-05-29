import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Switch,Route} from 'react-router-dom'
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInUp from './Pages/SignIn-page/SignIn-page';
import {auth ,createUserProfileDocument} from './firebase/firebase.utils'
import { connect } from 'react-redux';
import {setCurrentUser} from './Redux/user/user-action'

class  App extends React.Component {

  unsubscribeFromAuth=null
  componentDidMount(){
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({   
              id:snapShot.id,
              ...snapShot.data()
           
          })
        })

    }else{
      setCurrentUser({
        currentUser:userAuth
      })
    
    }
  })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
  return (
    <div >
        <Header  />
       <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/sign-in' component={SignInUp}/>
       </Switch>
    </div>
  )}
}
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
