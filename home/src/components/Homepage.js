import React, { useState, useEffect } from 'react'
import Image from './Image';
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
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  useEffect(() => {
    elements.forEach(el => {
      el.style.transform = `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`;
    })
  }, [mousePosition, elements])
  return (
    <main>
      <div className="vingette" />
      <Image image={background} className="parallax bg-img" />
      <Image image={fog_7} className="parallax fog-7" />
      <Image image={mountain_10} className="parallax mountain-10" />
      <Image image={fog_6} className="parallax fog-6" />
      <Image image={mountain_9} className="parallax mountain-9" />
      <Image image={mountain_8} className="parallax mountain-8" />
      <Image image={fog_5} className="parallax fog-5" />
      <Image image={mountain_7} className="parallax mountain-7" />
      <div className="parallax text">
        <h2>Hello</h2>
        <h1>World</h1>
      </div>
      <Image image={mountain_6} className="parallax mountain-6" />
      <Image image={fog_4} className="parallax fog-4" />
      <Image image={mountain_5} className="parallax mountain-5" />
      <Image image={fog_3} className="parallax fog-3" />
      <Image image={mountain_4} className="parallax mountain-4" />
      <Image image={mountain_3} className="parallax mountain-3" />
      <Image image={fog_2} className="parallax fog-2" />
      <Image image={mountain_2} className="parallax mountain-2" />
      <Image image={mountain_1} className="parallax mountain-1" />
      <Image image={sun_rays} className="sun-rays" />
      <Image image={black_shadow} className="black-shadow" />
      <Image image={fog_1} className="parallax fog-1" />
    </main>
  )
}

export default Homepage