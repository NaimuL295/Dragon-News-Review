import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import LatestNews from '../LatestNews';
import Navbar from '../Navbar';
import LeftAside from '../Homelayout/LeftAside';
import RightAside from '../Homelayout/RightAside';
import CategoryNews from '../CategoryNews';

const HomeLayout = () => {
    return (
        <div>
         <header> <Header></Header>
       <section className=   ' mr-3 w-11/12 mx-auto'>   <LatestNews></LatestNews> 
         </section>
    <Navbar  className="mr-3 w-11/12 mx-auto"></Navbar>
      
         </header>  
        
        
         <main className='w-11/12 mx-auto  grid grid-cols-12  gap-5' >
          
    <aside  className='col-span-3 sticky top-0 h-fit'>
<LeftAside>  <CategoryNews></CategoryNews></LeftAside>

    </aside>
    <section className='main  col-span-6'>
    <Outlet></Outlet>
     </section>
      <aside className='col col-span-3'> <RightAside></RightAside> </aside>
      


         </main>



        </div>
    );
};

export default HomeLayout;