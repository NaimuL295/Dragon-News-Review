import React from 'react';
import { FaEye } from 'react-icons/fa';
const NewsCart = ({news}) => {
    const { title, author, thumbnail_url, details, rating, total_view } = news;
    return (
    <>
    
    <div className="card bg-base-200   shadow-md p-4 rounded-lg">
      {/* Author Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={author?.img} alt="author" className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="font-semibold">{author?.name}</h2>
            <p className="text-sm text-gray-400">{new Date(author?.published_date).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <button className="btn btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
          <button className="btn btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="card-title mb-3 text-lg font-bold">{title}</h2>

      {/* Thumbnail */}
      <figure className="mb-3">
        <img src={thumbnail_url} alt="news" className="rounded-md w-full h-56 object-cover" />
      </figure>

      {/* Details */}
      <p className="text-gray-700 mb-4">
        {details.length > 200 ? details.slice(0, 200) + '...' : details}
        <span className="text-primary font-semibold ml-2 cursor-pointer">Read More</span>
      </p>

      {/* Footer Section */}
      <div className="flex items-center justify-between pt-2 border-t text-sm text-gray-500">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: Math.round(rating.number) }).map((_, idx) => (
            <span key={idx} className="text-orange-400">★</span>
          ))}
          <span className="ml-1">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
    
    
    
    </>
    );
};

export default NewsCart;