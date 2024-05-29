import { useState } from "react"
export const HnadleLogin = ()=>{
    const [loggedIn, setloggedIn] = useState(false)

    const handleLogin = ()=>{
       setloggedIn(true)
    }

    const handleLogout = ()=>{
       setloggedIn(false)
    }

    return(
        <div>
            <button onClick={handleLogin}></button>
            <button onClick={handleLogout}></button>
            <div>User is {loggedIn?'loggedIn':'loggedOut'}</div>
            <button></button>
        </div>
    )
}