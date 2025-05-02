import React, { use, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';

const SocialLogin = () => {
    const [str,setStr]=useState(false)
const {logGoogle}=use(AuthContext)
const handlerGoogle=()=>{
logGoogle()
setStr(true)
}


    return (
        <div className=' space-y-3'>
            <h2>Login With</h2>
{ str?  "" :<button   onClick={handlerGoogle}  className='btn  w-full'> <FcGoogle > </FcGoogle> Login With </button>
    
}
<p> <button     className='btn w-full'><FaGithub />Login With   </button>   </p>

     
        </div>
    );
};

export default SocialLogin;