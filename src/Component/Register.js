import {state, useState } from 'react'
import React from 'react'
import '../Css/RegisterStyle.css';
import axios from 'axios';



const Register =() =>{
	const [data,setData] =useState({
		username:'',
		email:'',
		password:'',
		confirmPassword:'',
	})
	const {username,email,password,confirmPassword}=data;
	const changeHandler= e=>{
		setData({...data,[e.target.name]:[e.target.value]})
	}
	const submitHandler = e =>{
	debugger;
		e.preventDefault();
		if(username=="" || password=="")
		{
			alert("Please fill required fields");
		}
		else if(username[0].length <= 5)
		{
			console.log(username);
			alert("username must be at least 5 characters");

		}
		else if(password[0].length<8)
		{
			alert("Password should have atleast 8 characters");
		}
		else if(password[0]!==confirmPassword[0])
		{
			alert("Passwords are not matched");
		}
		else
		{
		axios.post("http://localhost:8083/adduser", {

			username : username[0],
	
			password :password[0]
	
			}).then(
				alert("Successful Registration")
			)
		}
		
	}
	return (
		<div>
			<center>
				<form autoComplete="off" onSubmit={submitHandler}> 
					<div className="form">
					<label className="label">Username</label>
					<input type="text" name="username" value={username} onChange={changeHandler}/><br />
					<label className="label">Email</label><br></br>
					<input type="email" name="email" value={email} onChange={changeHandler}/><br/>
					<label className="label">Password</label>
					<input type="password" name="password" value={password} onChange={changeHandler}/><br/>
					<label className="label">Confirm Password</label>
					<input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/><br/>
					<input type="submit" name="submit"/><br/>
					</div>
				</form>
			</center>
		</div>
	)
}

export default Register;