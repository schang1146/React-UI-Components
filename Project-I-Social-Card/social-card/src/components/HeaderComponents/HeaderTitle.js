import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className='HeaderTitle'>
            <a className='HeaderName' href='https://twitter.com/LambdaSchool?lang=en'>Lambda School</a>
            <p className='HeaderHandle'>@LambdaSchool</p>
            <a className='HeaderDate' href='#'>26 jan</a>
        </div>
    );
};

export default HeaderTitle;