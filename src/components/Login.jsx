import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'


function Login ()  {

    const history = useNavigate();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function sumbit(e){
        e.preventDefault()

        try{
            await axios.post("http://localhost:8000/", {
                email,password
            })
            .then(res =>{
                if(res.data = "exist"){
                   history("/home", {state:{id:email}}) 
                }
                else if(res.data = "notexist"){
                    alert("User does not exist")
                }
            })
            .catch(e => {
                alert("Wrong details")
                console.log(e);
            })
        }
        catch{
            console.log(e)
        }
    }

  return (
    <div>
        <h1>Login</h1>
        <form action='POST'>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your mailID' name='' id='' />
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your password' name='' id='' />
            
            <input type="submit"/>
        </form>
        <p>OR</p>
        <Link to="/signup" onClick={sumbit}>Signup</Link>
    </div>
  )
}

export default Login