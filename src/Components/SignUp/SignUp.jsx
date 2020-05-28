import React from 'react'
import CustomButton from '../Custom-button/CustomButton'
import FormInput from '../Form-input/FormInput'
import { auth , createUserProfileDocument } from '../../firebase/firebase.utils'
import './SignUp.scss'


class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''

        }
    }
    handleSubmit=async e =>{
        e.preventDefault()
        const {displayName,email,password,confirmPassword}=this.state
        if(password!==confirmPassword){
            alert(` Passwords doesnt match`)
            return
        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName})
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(error){
                console.log('failed to create user',error.message)
        }

    }
    handleChange=({target})=>{
        this.setState({
           [target.name]:target.value
        }   )
    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state
        return(
            <div className='sign-up'> 
                <h2 className="title">I don't have an account</h2>
                <span>Create New Account</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='Display Name'
                    required
                    onChange={this.handleChange}
                    
                    />
                       <FormInput
                    type='email'
                    name='email'
                    value={email}
                    label='e-mail'
                    required
                    onChange={this.handleChange}

                    />
                       <FormInput
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    required
                    onChange={this.handleChange}

                    />
                       <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm your password'
                    required
                    onChange={this.handleChange}

                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>

            </div>
        )
    }
}
export default SignUp