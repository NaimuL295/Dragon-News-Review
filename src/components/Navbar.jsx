import React from 'react';
// import {usePng} from "../assets/user.png"
import { NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div> </div>
            <div className='nav space-x-3'>

<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
               {/* <img src={usePng} alt="" /> */}
                <button className=" mr-4  px-10 bg-black text-white"> Login</button>
            </div>
        </div>
);
};

export default Navbar;