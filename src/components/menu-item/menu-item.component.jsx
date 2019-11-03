import React from 'react';
import './menu-item.styles.scss'



const MenuItem = ({ tite, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='content'>
      <div className='title'>{tite.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);



export default MenuItem;