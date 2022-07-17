import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const LoginStatus = () => {
    const {token} = useContext(AuthContext);
  return (
    <div>
        {token ? <>Loged In</> : <>Loged Out</>}
    </div>
  )
}