import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../utils/firebase'

const UserAccount = () => {
    const [user, loading ] = useAuthState(auth);
  return (
    <div className='mt-10'>Welcome {user.displayName}</div>
    
  )
}

export default UserAccount