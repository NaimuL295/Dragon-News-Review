import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
const Register = () => {
  const navigate=useNavigate()
const {createUser,setUser,updataUser}=use(AuthContext)
const [nameerror ,setName]=useState("")
  const handlerRegister=(e)=>{
e.preventDefault()
const name=e.target.name.value ;
if(name.length){
  setName("Name should be more then 5  character")
}else{
  setName("")
}

const photo=e.target.photo.value ;
const email=e.target.email.value ;
const password=e.target.password.value ;
// console.log(name,photo ,email, password);
  createUser(  email,password).
  then(res=>{
    
    const user=res.user
    updataUser({
      displayName:name,photoURL:photo
    }).then(() => {
       setUser({...user,displayName:name,photoURL
        :photo})
        navigate("/")
    }).catch((error) => {
      console.log(error);
      
 setUser(user)
    });
   

  }).catch(error=>{
    const errorMessage = error.message;
  alert(errorMessage)
  })


  }
    return (
        <div>
         <div>
           <div className="card bg-base-100 w-full max-w-sm shrink-0  mx-auto shadow-2xl">
           <h1 className='font-semibold text-2xl text-center py-3 '>Register your account </h1>
     
      <form  onSubmit={handlerRegister} className="card-body"> 
      
        <fieldset className="fieldset">
            {/* name */}
        <label className="label">Fullname</label>
        <input type="text" 
        name='name' className="input" 
        placeholder="Name" required/>
{nameerror && <p className='text-xs text-red-500'> {nameerror}  </p>}
{/* photoUrl */}
        <label className="label">Photo</label>
        <input type="url"
        name='photo' 
          className="input"
         placeholder="Photo url"required />
         {/* email */}
         <label className="label">Email</label>
         <input
          type="email" 
          name='email'
           className="input"
           placeholder="Email" />
         {/* password */}
          <label className="label">Password</label>
          <input 
          type="password"  
          name='password'
           className="input"
           placeholder="Password"
            required/>
          <div>
      
            </div>
            <p className='font-semibold text-center py-2'> Already Have An Account <Link className='text-secondary' to="/auth/login"> Log in</Link></p>
          <button type='submit'  className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>    
        </div>     
        </div>
    );
};

export default Register;