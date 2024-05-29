import { useState } from "react"; 

type AuthUser = {
    name:string,
    email:string
}

export const User = (props:AuthUser)=>{  
    const [user,setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = ()=>{
            setUser({
                name:"Vishwas",
                email:"Vishwas@gmail.com",
            })
    };
    const handleLogout = ()=>{
         setUser({} as AuthUser) // We can use typeAssertion Here
    };
    return(
      <div>
       <button onClick={handleLogin}> Login</button>
       <button onClick={handleLogout}>Logout</button>
       <div>User name is {user?`${props.name}`:``} </div>
       <div>User Email is {user?`${props.email}`:``} </div>
      </div>
    )
}