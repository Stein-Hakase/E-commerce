import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent  as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import './Header.scss'
import CartIcon from '../cart-icon/CartIcon'
import Cart from '../Cart/Cart'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../Redux/Cart/cartSelectors'
import {selectCurrentUser} from '../../Redux/user/userSelector'


const Header=({currentUser,hidden})=>(
    
 
        <div className='header'>
            <Link  className='logo-container' 
                      to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option'
                to='/shop'>SHOP
                </Link>
                <Link className='option'
                to='/contact'>CONTACT
                </Link>
                        {
                        currentUser?(
                        
                        <div className='option'  
                        onClick={()=> auth.signOut() }>SIGN OUT </div>
                        ):(
                        <Link className='option'
                        to='/sign-in'>SIGN-IN
                        </Link>)
                        }
                        <CartIcon/>
                </div>
            {hidden?null:<Cart/>}
                
        </div>
    
    )
const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden

})

export default connect(mapStateToProps)(Header)