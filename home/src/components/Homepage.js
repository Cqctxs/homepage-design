import React from 'react'
import {
  background,
  black_shadow,
  fog_1,
  fog_2,
  fog_3,
  fog_4,
  fog_5,
  fog_6,
  fog_7,
  mountain_1,
  mountain_2,
  mountain_3,
  mountain_4,
  mountain_5,
  mountain_6,
  mountain_7,
  mountain_8,
  mountain_9,
  mountain_10,
  sun_rays
} from '../assets/images'
function Homepage() {
  return (
    <main>
      <div className="vingette" />
      <img src={background} alt="" className="parallax bg-img" />
      <img src={fog_7} alt="" className="parallax fog-7" />
      <img src={mountain_10} alt="" className="parallax mountain-10" />
      <img src={fog_6} alt="" className="parallax fog-6" />
      <img src={mountain_9} alt="" className="parallax mountain-9" />
      <img src={mountain_8} alt="" className="parallax mountain-8" />
      <img src={fog_5} alt="" className="parallax fog-5" />
      <img src={mountain_7} alt="" className="parallax mountain-7" />
      <div className="parallax text">
        <h2>China</h2>
        <h1>ZhangJiaJie</h1>
      </div>
      <img src={mountain_6} alt="" className="parallax mountain-6" />
      <img src={fog_4} alt="" className="parallax fog-4" />
      <img src={mountain_5} alt="" className="parallax mountain-5" />
      <img src={fog_3} alt="" className="parallax fog-3" />
      <img src={mountain_4} alt="" className="parallax mountain-4" />
      <img src={mountain_3} alt="" className="parallax mountain-3" />
      <img src={fog_2} alt="" className="parallax fog-2" />
      <img src={mountain_2} alt="" className="parallax mountain-2" />
      <img src={mountain_1} alt="" className="parallax mountain-1" />
      <img src={sun_rays} alt="" className="sun-rays" />
      <img src={black_shadow} alt="" className="black-shadow" />
      <img src={fog_1} alt="" className="parallax fog-1" />
    </main>
  )
}

export default Homepage