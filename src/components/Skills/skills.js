import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum nostrum eveniet, ut omnis asperiores, suscipit odio sit provident quas, voluptas error. Consectetur natus in provident ducimus alias ullam sed.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} className='skillBarImg' />
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Website Design</h2>
            <p>This demo text can be changed while making the production ready website.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} className='skillBarImg' />
          <div className='skillBarText'>
            <h2>App Design</h2>
            <p>You can write text related to mobile app development.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;