import React, { Suspense } from 'react';


import Categories from '../Categories';

const LeftAside = () => {
    
   
    
    return (
        <div>
           <Suspense fallback={<h1>   loading....</h1>}>
         <Categories></Categories>
        
            </Suspense>
        </div>
    );
};

export default LeftAside;