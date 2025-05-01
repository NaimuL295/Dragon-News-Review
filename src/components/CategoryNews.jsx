import { useParams } from "react-router";

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import NewsCart from "./Homelayout/NewCart/NewsCart";
const CategoryNews = ()=>{
const [CategoryNews,setCategoryNews]=useState([])
const { id}=useParams()
const Id=parseInt(id)
const data=useLoaderData()

useEffect(()=>{
  if (Id == 0) {
    setCategoryNews(data)
  }else if(Id === 1){
const NewFilter = data.filter( news=> news.others.is_today_pick === true)
setCategoryNews(NewFilter)

  }else{
    const NewFilter = data.filter( news=> news.category_id  === Id)
  setCategoryNews(NewFilter) 
  }


},[Id, data])
    return (
        <div>
<div className="grid grid-cols-1 gap-5"> {
  
CategoryNews.map(news=>
  <NewsCart key={news.id} news={news} ></NewsCart>
)
  
  } </div>

        </div>
    );
};

export default CategoryNews;