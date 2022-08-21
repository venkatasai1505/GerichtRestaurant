import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
     <div className="app__aboutus-content_about">
       <h1 className="headtext__cormorant">About Us</h1>
       <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
       <p className="p__opensans">Hello world! Is here to cancel meals. Fresh troops the avenging can take the price of the gate elit. That beating you soften large and less trouble. In the fireball there is no element of time will not be avenging Moors, always. Product Sample no, the volutpat But to drink in that, at times as before.</p>
       <button type="button" className="custom__button">Know More</button>
     </div>
     <br/><br/><br/><br/>
    <div className="app__aboutus-overplay flex__center">
      <img src={images.G} alt="g letter" height="600" width="600"/>
    </div>
     <div className="app__aboutus-content_knife flex__center">
       <img src={images.knife} alt="about_knife" className="knife__img" height="400"/>
     </div>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <div className="app__aboutus-content_history">
       <h1 className="headtext__cormorant">Our History</h1>
       <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
       <p className="p__opensans"> Laughter places the life of the disease sometimes lived in some of my but hate and not trucks.</p>
       <button type="button" className="custom__button">Know More</button>
     </div>

    </div>
  </div>
);

export default AboutUs;
