import React from 'react';
import { Link } from 'react-router';
const NewDetailCart = ({news}) => {
    return (
        <div>
            new NewDetailCart
        <img  className='max-w-full h-[350px] object-cover' src={news.image_url} alt="" />
       
        <p  color='text-2xl'> {news.title}</p>
        <Link className='btn  text-white   bg-secondary' to={`/category/${news.category_id}`}>Back to  category</Link>
        </div>


    );
};

export default NewDetailCart;