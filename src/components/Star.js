import React from 'react'

const Star = props => {

  const randomRotation = Math.floor(Math.random() * 360);
  const starStyles = {
    width: props.size * 5 + 'px',
    height: props.size * 5 + 'px',
    top: props.yPosition - 10 + '%',
    left: props.xPosition - 10 + '%',
    transform: `rotate(${randomRotation}deg)`
  }
  return (
    <div className="special-star" style={starStyles}></div>
  )
}

export default Star;