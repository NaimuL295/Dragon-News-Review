import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='space-y-5'>
            <h2 className=''> find us on</h2>
       <div className=''>
       <div className="join join-vertical">
  <button className="btn justify-start
  join-item  "><FaFacebook></FaFacebook>    Facebook</button>
  <button className="btn justify-start
  join-item "><FaTwitter></FaTwitter>  Twitter</button>
  <button className="btn justify-start
  join-item "> <FaInstagram></FaInstagram>  Instagram</button>
</div>


       </div>
       
        </div>
    );
};

export default FindUs;