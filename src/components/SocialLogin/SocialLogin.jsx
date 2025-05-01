import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className=' space-y-3'>
            <h2>Login With</h2>
<button className='btn  w-full'> <FcGoogle > </FcGoogle> Login With </button>
<p> <button className='btn w-full'><FaGithub />Login With   </button>   </p>

     
        </div>
    );
};

export default SocialLogin;