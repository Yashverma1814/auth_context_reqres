import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios"
import { AuthContext } from '../context/AuthContext';
import { LoginStatus } from './LoginStatus';
export const Login = () => {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const { toggle, token, toggleAuth, handleLogin, isAuth } = useContext(AuthContext)

    return (
        <div>
            {toggle ? <>
                <Button onClick={() => toggleAuth()} variant="outlined">Toggle</Button>
            </>
                : <>
                    <Button onClick={() => isAuth()} variant="outlined">Log Out</Button>
                    <br />
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="standard" />
                    <br />
                    <TextField value={pass} onChange={(e) => setPass(e.target.value)} label="Password" variant="standard" />
                    <br /><br />
                    <Button onClick={() => handleLogin({ email, password: pass })} variant="outlined">Login</Button>
                    <br /><br />
                    <LoginStatus />
                    <br /><br />

                    <Button onClick={() => toggleAuth()} variant="outlined">Toggle</Button>
                </>
            }
        </div>
    )
}

