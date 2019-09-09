import React from 'react'

const SimpleStar = props => {
  const starStyles = {
    width: props.size + 'px',
    height: props.size + 'px',
    top: props.yPosition + '%',
    left: props.xPosition + '%',
  }
  return (
    <div className="simple-star" style={starStyles}></div>
  )
}

export default SimpleStar;
