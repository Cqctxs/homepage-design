import React, { useState, useEffect } from 'react'
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
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2
      })
    }

    setElements(document.querySelectorAll(".parallax"));
    console.log(document.querySelectorAll(".parallax"));
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  useEffect(() => {
    elements.forEach(el => {
      const x = parseFloat(el.getAttribute('data-x'));
      const y = parseFloat(el.getAttribute('data-y'));
      el.style.transform = `translate(calc(-50% + ${(mousePosition.x * -x)}px), calc(-50% + ${mousePosition.y * -y}px))`;
    })
  }, [mousePosition, elements])
  return (
    <main>
      <div className="vingette" />
      <img src={background} alt="" className="parallax bg-img" data-x={0.3} data-y={0.38} />
      <img src={fog_7} alt="" className="parallax fog-7" data-x={0.27} data-y={0.32} />
      <img src={mountain_10} alt="" className="parallax mountain-10" data-x={0.195} data-y={0.305} />
      <img src={fog_6} alt="" className="parallax fog-6" data-x={0.25} data-y={0.28} />
      <img src={mountain_9} alt="" className="parallax mountain-9" data-x={0.125} data-y={0.155} />
      <img src={mountain_8} alt="" className="parallax mountain-8" data-x={0.1} data-y={0.11} />
      <img src={fog_5} alt="" className="parallax fog-5" data-x={0.16} data-y={0.105} />
      <img src={mountain_7} alt="" className="parallax mountain-7" data-x={0.1} data-y={0.1} />
      <div className="parallax text" data-x={0.07} data-y={0.07}>
        <h2>Hello</h2>
        <h1>World</h1>
      </div>
      <img src={mountain_6} alt="" className="parallax mountain-6" data-x={0.065} data-y={0.05} />
      <img src={fog_4} alt="" className="parallax fog-4" data-x={0.135} data-y={0.05} />
      <img src={mountain_5} alt="" className="parallax mountain-5" data-x={0.06} data-y={0.03} />
      <img src={fog_3} alt="" className="parallax fog-3" data-x={0.11} data-y={0.018} />
      <img src={mountain_4} alt="" className="parallax mountain-4" data-x={0.059} data-y={0.024} />
      <img src={mountain_3} alt="" className="parallax mountain-3" data-x={0.04} data-y={0.018} />
      <img src={fog_2} alt="" className="parallax fog-2" data-x={0.15} data-y={0.0115} />
      <img src={mountain_2} alt="" className="parallax mountain-2" data-x={0.0235} data-y={0.013} />
      <img src={mountain_1} alt="" className="parallax mountain-1" data-x={0.027} data-y={0.018} />
      <img src={sun_rays} alt="" className="sun-rays" />
      <img src={black_shadow} alt="" className="black-shadow" />
      <img src={fog_1} alt="" className="parallax fog-1" data-x={0.12} data-y={0.01} />
    </main>
  )
}

export default Homepage