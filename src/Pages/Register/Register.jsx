import Login from "../Login/Login"
import React, { useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

function Register(){
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [Name, setName] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

  
	async function handleSubmit(event) {
	  event.preventDefault();
      let registerPost = {
        name: Name,
		email: email,
		password: password,
        isAdmin: isAdmin
		};
	    let response = await axios.post("http://localhost:5000/api/users/Register", registerPost);
		console.log(response.data)
		localStorage.setItem('token', response.data);
		window.location = '/login';
	}

    return(

        <form className="box" onClick={handleSubmit} method="Post">
                <div className="form-group" size="lg" controlId="name">
                    <label className="form-label"/>
                        <h4>Create account</h4>
                    <input autoFocus type="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group" size="lg" controlId="email">
                    <label>Email</label>
                    <input autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control"/>
                    <input type = "checkbox" onChange={()=>{setIsAdmin(true)}}/>
                   
                    <button type="onClick" name="" value="Register"> Register ME! </button>
                <Link to='/Login'>
                    <button className="btn btn-primary">Already a user? Login Here</button>
                </Link>
      </form>
	);
}

export default Register;