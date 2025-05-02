import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import RightAside from '../Homelayout/RightAside';
import NewDetailCart from '../NewDetailCart';
import { useLoaderData, useParams } from 'react-router';


const NewsDetails = () => {
    const data =useLoaderData()
    const {id} =useParams()
    const [news,setNews]=useState({});
useEffect(()=>{
 const newDetails=data.find((singleNew)=> singleNew.id==id) 
  setNews(newDetails)

 
 },[data,id])



    return (
        <div>
         <header>
            <Header></Header>
         </header>
         <main   className='max-w-11/12 
         grid grid-cols-12  gap-5'>
            <section className='col-span-9'>
                <h2 className='font-bold mb-5'> News Details</h2>
          <NewDetailCart news={news} ></NewDetailCart>
            </section>
          <aside className='col-span-3'>
          <RightAside></RightAside>
          </aside>
             </main>
        </div>
    );
};

export default NewsDetails;