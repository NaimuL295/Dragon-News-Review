import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
    <div className='bg-base-200 min-h-screen'>
        <header className='w-11/12 mx-auto py-4' >
       <Navbar></Navbar>  

       <main className=' w-11/12 mx-auto py-5'>  </main>  
     
     <Outlet></Outlet>
        </header></div>
    );
};

export default AuthLayout;