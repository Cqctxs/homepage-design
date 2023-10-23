import React from 'react'

function Image({image, className, x, y, z}) {
  return (
    <img src={image} alt="" className={className} />
  )
}

export default Image