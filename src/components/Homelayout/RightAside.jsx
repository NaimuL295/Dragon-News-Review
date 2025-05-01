import React from 'react';
import SocialLogin from '../Sociallogin/Sociallogin';
import FindUs from './FindUs';
import QZone from './NewCart/QZone';


const RightAside = () => {
    return (
        <div>
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
<QZone></QZone>
        </div>
    );
};

export default RightAside;