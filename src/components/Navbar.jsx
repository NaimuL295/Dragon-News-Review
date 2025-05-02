
 import usePng from ".././assets/user.png"
import { Link, NavLink } from 'react-router';
import { AuthContext } from './Provider/AuthProvider';

 import { use } from "react";
const Navbar = () => {
    const {user, sigNOut}=use(AuthContext)
    //  console.log(user);
    
const handlerSignOut=()=>{
    sigNOut().then(()=>{
        alert("successful logout.")
    
    }).catch(error=>{
       console.log( error);
    })
}


    return (
        <div className='flex justify-between my-4 px-10 mx-auto'>
            <div> {user&& user.email} </div> 
            <div className='nav space-x-3'>

<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-5 '>
                <img src={ user ? user.photoURL:null} alt="" />
                <img  className='w-10' src={usePng} alt="" /> 
               {user ? <button onClick={handlerSignOut} >LogOut</button> : <Link  to="/auth/login" className="btn mr-4  px-10 bg-black text-white"> Login</Link>
               }
               
               
                </div>
        </div>
);
};

export default Navbar;