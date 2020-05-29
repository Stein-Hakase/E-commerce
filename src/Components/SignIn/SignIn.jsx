import React from 'react'
import FormInput from '../Form-input/FormInput'
import CustomButton from '../Custom-button/CustomButton'
import './SignIn.scss'
import {signInWithGoogle, auth} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',

        }
    }
    handleChange=({target})=>{
        this.setState({
           [target.name]:target.value
        })
    }
    handleSubmit= async e =>{
        e.preventDefault()
        const {email,password}=this.state
        try{
          await auth.signInWithEmailAndPassword(email,password)
          this.setState({
            email:'',
            password:'',
        })
        }catch(error){
                console.log('fail to connect',error)
        }
       

    }
    render(){
        return(
            <div className='sign-in'> 
               <h2>I have already an Account</h2>
               <span>Sign-in with your email and password</span>
              
            
                <form onSubmit={this.handleSubmit}>
                
                    <FormInput 
                    handleChange={this.handleChange} 
                    type='email' 
                    name='email' 
                    label='E-mail'
                    value={this.state.email} 
                    required/>
                 
                   
                    <FormInput
                    handleChange={this.handleChange}  
                    type='password' 
                    label='Password'
                    name='password' 
                    value={this.state.password} 
                    required/>
                    <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>

                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn