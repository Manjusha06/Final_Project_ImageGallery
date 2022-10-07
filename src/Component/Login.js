import React,{useState} from 'react'
import '../Css/LoginStyle.css';
import '../Component/Gallery';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
const Login=()=>{
    const[data,setData] = useState({
        username: '',
        password: ''
    })
    const{username,password}=data;
    const changeHandler = e=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e =>{
        debugger;
        e.preventDefault()
        if(username=="")
        {
            alert("Username should not be empty");
        }
        if(password=="")
        {
            alert("Password should not be empty");
        }
        else{
        axios.post("http://localhost:8083/verifyuser", {

			username : username[0],
	
			password :password[0]
	
			}).then(data =>

                {

                    if(data.data.length > 0)

                    {

                        localStorage.setItem("enablelogout", 1);
                        window.location.href ="/";

                    }

                    else

                    {

                        alert("Invalid Credentials");

                    }
                    


                })
       
        }

    }
        return (
            <div>
                <center>
                    <form onSubmit={submitHandler}>
                        <div className='Form'>
                        <label className="label">Username</label>
                        <input type="text" name="username"value={username} onChange={changeHandler}/> <br />
                        <label className="label">Password</label>
                        <input type="password" name="password"value={password} onChange={changeHandler}/> <br /><br></br>
                        <input type="submit" name="Submit" /><br></br>
                        <br></br><NavLink to="/admin" className="listItem" activeClassName="activeItem">ChangePassword?</NavLink>
                        </div>
                    </form>
                </center>
            </div>
        )

}


export default Login;