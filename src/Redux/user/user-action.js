import {UserTypesAction} from './user-types'

export const setCurrentUser=(user)=>({
   
        type:UserTypesAction.SET_CURRENT_USER,
        payload:user
    
})
