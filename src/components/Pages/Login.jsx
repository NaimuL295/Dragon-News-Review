import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {

const {logIn} =use(AuthContext)

 const [error,setError]=useState("")
const location= useLocation()
 const navigate=useNavigate();
  const  handlerSignin=(e)=>{
e.preventDefault()
 const email= e.target.email.value
 const password=e.target.password.value
//  console.log(email,password);
logIn(email,password).then(() => {
// console.log(result);
  
  navigate(`${location.state ? location.state: "/" }`)
}).catch((err) => {

 setError(err) 
});
  }
    return (
        <div>
           <div className="card bg-base-100 w-full max-w-sm shrink-0  mx-auto shadow-2xl">
           <h1 className='font-semibold text-2xl text-center py-3 '>Login your </h1>
     
      <form onClick={handlerSignin}  className="card-body"> 
      
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email"  required/>
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required/>
          <div>

            <a className="link link-hover">Forgot password?</a>
            
            </div>

            {error && <p className='text-red-500  py-2 '> {error} </p>}
            <p className='font-semibold text-center py-2'> Don't Have An Account <Link className='text-secondary' to="/auth/register"> Register</Link></p>
          <button  type='submit'  className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>    
        </div>
    );
};

export default Login;