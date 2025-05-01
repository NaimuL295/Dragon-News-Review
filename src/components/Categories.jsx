import React, { use } from 'react';
import { NavLink } from 'react-router';
const CategoryPromise=fetch('/categories.json').then(res=> res.json())
const Categories = () => {
       const Categories =use(CategoryPromise)

    
    return (
        <div>
         <h1>   All Caterogy {Categories.length}</h1>
                  <div className=' grid grid-cols-1  mt-1 gap-3'>
        {Categories.map((categories)=>(
         <NavLink className="btn"  key={categories.id} to={`/category/${categories.id}`}> 
            {categories.name} </NavLink>
        ) )}
                  </div>    
        </div>
    );
};

export default Categories;