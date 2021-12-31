import React from 'react';
import { logo1, logo2, logo3, logo4, logo5, logo6 } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={logo1} />
    </div>
    <div>
      <img src={logo2} />
    </div>
    <div>
      <img src={logo3} />
    </div>
    <div>
      <img src={logo4} />
    </div>
    <div>
      <img src={logo5} />
    </div>
    <div>
      <img src={logo6} />
    </div>
  </div>
);

export default Brand;
