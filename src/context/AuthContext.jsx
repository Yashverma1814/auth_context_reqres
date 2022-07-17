import { useState } from "react";
import { createContext } from "react";
import axios from "axios"
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null)
    const [toggle, setToggle] = useState(true)

    const handleLogin = (body) => {
        axios({
            method: "post",
            url: "https://reqres.in/api/login",
            data: body
        }).then(res => {
            setToken(res.data)
            console.log(res.data)
        }).catch(err => console.log(err))
    }

    const isAuth = () =>{
        if(token){
            setToken("")
        }
    }

    const toggleAuth = () =>{
        setToggle(!toggle);
    }

    const value = {
        handleLogin,
        token,
        isAuth,
        toggle,
        toggleAuth
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
};