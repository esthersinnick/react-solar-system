import React from 'react';

import Star from './Star';
import SimpleStar from './SimpleStar';

import { createStars } from '../helpers/createStars';

const Stars = () => {

  const numberOfSimpleStars = Math.floor(Math.random() * (50 - 10) + 10);
  const numberOfSpecialStars = Math.floor(Math.random() * (8 - 3) + 3);

  const stars = createStars(numberOfSimpleStars, numberOfSpecialStars)
  const simpleStars = stars.splice(0, numberOfSimpleStars);

  return (
    <>
      {simpleStars.map((star, index) =>
        <SimpleStar key={index} xPosition={star.xPosition} yPosition={star.yPosition} size={star.size} />
      )}

      {stars.map((star, index) =>
        <Star key={index} xPosition={star.xPosition} yPosition={star.yPosition} size={star.size} />
      )}
    </>
  )
}

export default Stars;
